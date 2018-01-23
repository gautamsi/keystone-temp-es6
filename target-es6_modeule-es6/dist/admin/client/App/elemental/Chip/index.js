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
import colors from './colors';
export const Chip = (_a) => {
    var { children, color, inverted, label, onClear, onClick } = _a, props = __rest(_a, ["children", "color", "inverted", "label", "onClear", "onClick"]);
    props.className = css(classes.chip, props.className);
    const labelClassName = css(classes.button, classes.label, classes['button__' + color + (inverted ? '__inverted' : '')]);
    const clearClassName = css(classes.button, classes.clear, classes['button__' + color + (inverted ? '__inverted' : '')]);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("button", { type: "button", onClick: onClick, className: `${labelClassName}` },
            label,
            children),
        !!onClear && (React.createElement("button", { type: "button", onClick: onClear, className: `${clearClassName}` }, "\u00D7"))));
};
export { colors };
Chip.defaultProps = {
    color: 'default',
};
