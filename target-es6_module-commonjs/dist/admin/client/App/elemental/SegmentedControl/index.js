"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamor_1 = require("glamor");
const styles_1 = require("./styles");
exports.SegmentedControl = (_a) => {
    var { className, color, cropText, equalWidthSegments, inline, onChange, options, value } = _a, props = __rest(_a, ["className", "color", "cropText", "equalWidthSegments", "inline", "onChange", "options", "value"]);
    props['className'] = glamor_1.css(styles_1.default.control, inline ? styles_1.default.control__inline : null, className);
    return (React.createElement("div", Object.assign({}, props), options.map((opt) => {
        const buttonClassName = glamor_1.css(styles_1.default.button, opt.disabled ? styles_1.default.button__disabled : null, opt.value === value ? styles_1.default['button__' + color] : null, cropText ? styles_1.default.button__cropText : null, equalWidthSegments ? styles_1.default.button__equalWidth : null);
        return (React.createElement("button", { className: `${buttonClassName}`, key: opt.value, onClick: () => !opt.disabled ? onChange(opt.value) : undefined, type: "button", title: cropText ? opt.label : null, tabIndex: opt.disabled ? -1 : null }, opt.label));
    })));
};
exports.SegmentedControl.defaultProps = {
    color: 'default',
};
