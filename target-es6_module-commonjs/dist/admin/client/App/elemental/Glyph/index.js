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
const colors_1 = require("./colors");
const styles_1 = require("./styles");
const octicons_1 = require("./octicons");
// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
exports.Glyph = (_a) => {
    var { cssStyles, color, component: Component, name, size } = _a, props = __rest(_a, ["cssStyles", "color", "component", "name", "size"]);
    const colorIsValidType = Object.keys(colors_1.default).indexOf(color) >= 0;
    props.className = glamor_1.css(styles_1.default.glyph, colorIsValidType && styles_1.default['color__' + color], styles_1.default['size__' + size], cssStyles) + ` ${octicons_1.octicons[name]}`;
    if (props.className) {
        props.className += (' ' + props.className);
    }
    // support random color strings
    props.style = Object.assign({ color: !colorIsValidType ? color : null }, props.style);
    return React.createElement(Component, Object.assign({}, props));
};
exports.Glyph.defaultProps = {
    component: 'i',
    color: 'inherit',
    size: 'small',
};
