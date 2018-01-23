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
const ScreenReaderOnly_1 = require("../ScreenReaderOnly");
exports.Spinner = (_a) => {
    var { className, size, color } = _a, props = __rest(_a, ["className", "size", "color"]);
    props['className'] = glamor_1.css(styles_1.default.base, styles_1.default[size], className);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("span", { className: `${glamor_1.css(styles_1.default.dot, styles_1.default['size__' + size], styles_1.default['color__' + color], styles_1.default.dot__first)}` }),
        React.createElement("span", { className: `${glamor_1.css(styles_1.default.dot, styles_1.default['size__' + size], styles_1.default['color__' + color], styles_1.default.dot__second)}` }),
        React.createElement("span", { className: `${glamor_1.css(styles_1.default.dot, styles_1.default['size__' + size], styles_1.default['color__' + color], styles_1.default.dot__third)}` }),
        React.createElement(ScreenReaderOnly_1.ScreenReaderOnly, null, "Loading...")));
};
exports.Spinner.defaultProps = {
    size: 'medium',
    color: 'default',
};
