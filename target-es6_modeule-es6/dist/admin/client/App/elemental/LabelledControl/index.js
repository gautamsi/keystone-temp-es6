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
export const LabelledControl = (_a) => {
    var { className, inline, label, title } = _a, props = __rest(_a, ["className", "inline", "label", "title"]);
    const labelClassName = css(classes.wrapper, inline && classes.wrapper__inline, className);
    return (React.createElement("label", { title: title, className: `${labelClassName}` },
        React.createElement("input", Object.assign({}, props, { className: `${css(classes.control)}` })),
        React.createElement("span", { className: `${css(classes.label)}` }, label)));
};
