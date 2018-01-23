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
exports.Center = (_a) => {
    var { component: Component, height } = _a, props = __rest(_a, ["component", "height"]);
    props.className = `${glamor_1.css(styles_1.default.center, props.className)}`;
    props.style = Object.assign({ height }, props.style);
    return React.createElement(Component, Object.assign({}, props));
};
exports.Center.defaultProps = {
    component: 'div',
    height: 'auto',
};
