var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { css } from 'glamor';
import * as React from 'react';
import classes from './styles';
// NOTE: Inline Group Section accepts a single child
export const InputGroupSection = (_a) => {
    var { active, cssStyles, children, className, contiguous, grow, position } = _a, props = __rest(_a, ["active", "cssStyles", "children", "className", "contiguous", "grow", "position"]);
    // evaluate position
    const separate = position === 'last' || position === 'middle';
    // A `contiguous` section must manipulate it's child directly
    // A separate (default) section just wraps the child
    return contiguous ? React.cloneElement(children, Object.assign({ cssStyles: [
            classes.contiguous,
            classes['contiguous__' + position],
            active ? classes.active : null,
            grow ? classes.grow : null,
            cssStyles,
        ] }, props)) : (React.createElement("div", Object.assign({ className: `${css(!!grow && classes.grow, !!separate && classes.separate, cssStyles)}` }, props), children));
};
