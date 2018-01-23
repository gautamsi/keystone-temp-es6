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
// clone children if a class exists for the tagname
const cloneWithClassnames = (c) => {
    const type = c.type && c.type.displayName
        ? c.type.displayName
        : c.type || null;
    if (!type || !styles_1.default[type])
        return c;
    return React.cloneElement(c, {
        className: glamor_1.css(styles_1.default[type]),
    });
};
exports.Alert = (_a) => {
    var { children, className, color, component: Component } = _a, props = __rest(_a, ["children", "className", "color", "component"]);
    props['className'] = glamor_1.css(styles_1.default.alert, styles_1.default[color], className);
    props['children'] = React.Children.map(children, cloneWithClassnames);
    return React.createElement(Component, Object.assign({}, props, { "data-alert-type": color }));
};
exports.Alert.defaultProps = {
    component: 'div',
};
