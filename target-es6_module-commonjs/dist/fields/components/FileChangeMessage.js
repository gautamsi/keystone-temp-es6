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
const elemental_1 = require("../../admin/client/App/elemental");
const color_1 = require("../../admin/client/utils/color");
const theme_1 = require("../../admin/client/theme");
exports.FileChangeMessage = (_a) => {
    var { style, color } = _a, props = __rest(_a, ["style", "color"]);
    const styles = Object.assign({ marginRight: 10, minWidth: 0 }, style);
    if (color !== 'default') {
        styles.backgroundColor = color_1.fade(theme_1.theme.color[color], 10);
        styles.borderColor = color_1.fade(theme_1.theme.color[color], 30);
        styles.color = theme_1.theme.color[color];
    }
    return (React.createElement(elemental_1.FormInput, Object.assign({ noedit: true, style: styles }, props)));
};
exports.FileChangeMessage.defaultProps = {
    color: 'default',
};
