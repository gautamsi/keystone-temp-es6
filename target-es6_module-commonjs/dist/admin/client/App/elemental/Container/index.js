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
exports.Container = (_a) => {
    var { clearFloatingChildren, component: Component, width } = _a, props = __rest(_a, ["clearFloatingChildren", "component", "width"]);
    props.className = glamor_1.css(styles_1.default.container, styles_1.default[width], clearFloatingChildren ? styles_1.default.clearfix : null, props.className);
    return React.createElement(Component, Object.assign({}, props));
};
exports.Container.defaultProps = {
    component: 'div',
    width: 'large',
};
