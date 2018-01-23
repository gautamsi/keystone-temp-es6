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
const classNames = require("classnames");
exports.ToolbarSection = (_a) => {
    var { left, right } = _a, props = __rest(_a, ["left", "right"]);
    props.className = classNames('Toolbar__section', {
        'Toolbar__section--left': left,
        'Toolbar__section--right': right,
    }, props.className);
    return React.createElement("div", Object.assign({}, props));
};
