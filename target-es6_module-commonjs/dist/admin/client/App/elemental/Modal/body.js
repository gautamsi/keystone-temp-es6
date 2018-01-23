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
const theme_1 = require("../../../theme");
exports.ModalBody = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: glamor_1.css(classes.body, className) }, props)));
};
const classes = {
    body: {
        paddingBottom: theme_1.theme.modal.padding.body.vertical,
        paddingLeft: theme_1.theme.modal.padding.body.horizontal,
        paddingRight: theme_1.theme.modal.padding.body.horizontal,
        paddingTop: theme_1.theme.modal.padding.body.vertical,
    },
};
