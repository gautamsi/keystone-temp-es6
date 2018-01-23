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
exports.FormNote = (_a) => {
    var { className, children, component: Component, html } = _a, props = __rest(_a, ["className", "children", "component", "html"]);
    props['className'] = glamor_1.css(styles_1.default.note, className);
    // Property Violation
    if (children && html) {
        console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
    }
    return html ? (React.createElement(Component, Object.assign({}, props, { dangerouslySetInnerHTML: { __html: html } }))) : (React.createElement(Component, Object.assign({}, props), children));
};
exports.FormNote.defaultProps = {
    component: 'div',
};
