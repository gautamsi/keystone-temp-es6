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
const elemental_1 = require("../../../elemental");
exports.ListHeaderButton = (_a) => {
    var { className, label, glyph } = _a, props = __rest(_a, ["className", "label", "glyph"]);
    return (React.createElement(elemental_1.DropdownButton, Object.assign({ block: true }, props),
        React.createElement(elemental_1.Glyph, { name: glyph, cssStyles: classes.glyph }),
        React.createElement("span", { className: `{css(classes.label)}` }, label)));
};
// show an icon on small screens where real estate is precious
// otherwise render the label
const classes = {
    glyph: {
        'display': 'none',
        '@media (maxWidth: 500px)': {
            display: 'inline-block',
        },
    },
    label: {
        'display': 'inline-block',
        '@media (maxWidth: 500px)': {
            display: 'none',
        },
    },
};
