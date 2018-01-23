var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { css } from 'glamor';
import classes from './styles';
export const Center = (_a) => {
    var { component: Component, height } = _a, props = __rest(_a, ["component", "height"]);
    props.className = `${css(classes.center, props.className)}`;
    props.style = Object.assign({ height }, props.style);
    return React.createElement(Component, Object.assign({}, props));
};
Center.defaultProps = {
    component: 'div',
    height: 'auto',
};
