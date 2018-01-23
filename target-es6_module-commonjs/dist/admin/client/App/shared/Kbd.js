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
const theme_1 = require("../../theme");
const color_1 = require("../../utils/color");
exports.Kbd = (_a) => {
    var props = __rest(_a, []);
    props.className = `${glamor_1.css(classes.kbd)}`;
    return React.createElement("kbd", Object.assign({}, props));
};
const classes = {
    kbd: {
        backgroundColor: theme_1.theme.color.body,
        borderRadius: 3,
        border: `1px solid #ccc`,
        borderBottomColor: color_1.darken('#ccc', 4),
        borderTopColor: color_1.lighten('#ccc', 4),
        boxShadow: `0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset`,
        display: 'inline-block',
        fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
        fontSize: '0.85em',
        fontWeight: 700,
        lineHeight: 'inherit',
        padding: '1px 4px',
        whiteSpace: 'nowrap',
        // little hack to tweak "visual-middle" alignment
        position: 'relative',
        top: -1,
    },
};
