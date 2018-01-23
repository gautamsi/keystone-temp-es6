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
const glamor_1 = require("glamor");
const React = require("react");
const styles_1 = require("./styles");
const colors_1 = require("./colors");
exports.colors = colors_1.default;
exports.Chip = (_a) => {
    var { children, color, inverted, label, onClear, onClick } = _a, props = __rest(_a, ["children", "color", "inverted", "label", "onClear", "onClick"]);
    props.className = glamor_1.css(styles_1.default.chip, props.className);
    const labelClassName = glamor_1.css(styles_1.default.button, styles_1.default.label, styles_1.default['button__' + color + (inverted ? '__inverted' : '')]);
    const clearClassName = glamor_1.css(styles_1.default.button, styles_1.default.clear, styles_1.default['button__' + color + (inverted ? '__inverted' : '')]);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("button", { type: "button", onClick: onClick, className: `${labelClassName}` },
            label,
            children),
        !!onClear && (React.createElement("button", { type: "button", onClick: onClear, className: `${clearClassName}` }, "\u00D7"))));
};
exports.Chip.defaultProps = {
    color: 'default',
};
