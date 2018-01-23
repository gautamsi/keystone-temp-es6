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
exports.LabelledControl = (_a) => {
    var { className, inline, label, title } = _a, props = __rest(_a, ["className", "inline", "label", "title"]);
    const labelClassName = glamor_1.css(styles_1.default.wrapper, inline && styles_1.default.wrapper__inline, className);
    return (React.createElement("label", { title: title, className: `${labelClassName}` },
        React.createElement("input", Object.assign({}, props, { className: `${glamor_1.css(styles_1.default.control)}` })),
        React.createElement("span", { className: `${glamor_1.css(styles_1.default.label)}` }, label)));
};
