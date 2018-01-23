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
const react_router_dom_1 = require("react-router-dom");
const elemental_1 = require("../../../elemental");
const theme_1 = require("../../../../theme");
exports.DrilldownItem = (_a) => {
    var { href, label, separate, separator, style } = _a, props = __rest(_a, ["href", "label", "separate", "separator", "style"]);
    props.className = glamor_1.css(classes.item, props.className);
    // remove horizontal padding
    const styles = Object.assign({ paddingLeft: 0, paddingRight: 0 }, style);
    return (React.createElement("li", Object.assign({}, props),
        React.createElement(elemental_1.Button, { component: react_router_dom_1.Link, style: styles, to: href, variant: "link" }, label),
        separate && (React.createElement("span", { className: `${glamor_1.css(classes.separator)}` }, separator))));
};
exports.DrilldownItem.defaultProps = {
    separator: React.createElement(elemental_1.Glyph, { name: "chevron-right" }),
};
const classes = {
    item: {
        display: 'inline-block',
        margin: 0,
        padding: 0,
        verticalAlign: 'middle',
    },
    separator: {
        color: theme_1.theme.color.gray40,
        marginLeft: '0.5em',
        marginRight: '0.5em',
    },
};
