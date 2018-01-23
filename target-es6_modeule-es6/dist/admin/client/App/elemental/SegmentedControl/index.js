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
export const SegmentedControl = (_a) => {
    var { className, color, cropText, equalWidthSegments, inline, onChange, options, value } = _a, props = __rest(_a, ["className", "color", "cropText", "equalWidthSegments", "inline", "onChange", "options", "value"]);
    props['className'] = css(classes.control, inline ? classes.control__inline : null, className);
    return (React.createElement("div", Object.assign({}, props), options.map((opt) => {
        const buttonClassName = css(classes.button, opt.disabled ? classes.button__disabled : null, opt.value === value ? classes['button__' + color] : null, cropText ? classes.button__cropText : null, equalWidthSegments ? classes.button__equalWidth : null);
        return (React.createElement("button", { className: `${buttonClassName}`, key: opt.value, onClick: () => !opt.disabled ? onChange(opt.value) : undefined, type: "button", title: cropText ? opt.label : null, tabIndex: opt.disabled ? -1 : null }, opt.label));
    })));
};
SegmentedControl.defaultProps = {
    color: 'default',
};
