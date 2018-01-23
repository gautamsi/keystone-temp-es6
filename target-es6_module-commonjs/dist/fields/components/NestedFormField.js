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
const theme_1 = require("../../admin/client/theme");
exports.NestedFormField = (_a) => {
    var { children, className, label } = _a, props = __rest(_a, ["children", "className", "label"]);
    return (React.createElement(elemental_1.FormField, Object.assign({}, props),
        React.createElement(elemental_1.FormLabel, { cssStyles: classes.label }, label),
        children));
};
const classes = {
    label: {
        color: theme_1.theme.color.gray40,
        fontSize: theme_1.theme.font.size.small,
        [`@media (min-width: ${theme_1.theme.breakpoint.tabletLandscapeMin})`]: {
            paddingLeft: '1em',
        },
    },
};
