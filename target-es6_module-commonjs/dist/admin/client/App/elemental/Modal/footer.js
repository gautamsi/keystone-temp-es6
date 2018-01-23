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
exports.ModalFooter = (_a) => {
    var { align, className } = _a, props = __rest(_a, ["align", "className"]);
    return (React.createElement("div", Object.assign({}, props, { className: `${glamor_1.css(classes.footer, classes['align__' + align], className)}` })));
};
exports.ModalFooter.defaultProps = {
    align: 'left',
};
const classes = {
    footer: {
        borderTop: `2px solid ${theme_1.theme.color.gray10}`,
        display: 'flex',
        paddingBottom: theme_1.theme.modal.padding.footer.vertical,
        paddingLeft: theme_1.theme.modal.padding.footer.horizontal,
        paddingRight: theme_1.theme.modal.padding.footer.horizontal,
        paddingTop: theme_1.theme.modal.padding.footer.vertical,
    },
    // alignment
    align__left: {
        justifyContent: 'flex-start',
    },
    align__center: {
        justifyContent: 'center',
    },
    align__right: {
        justifyContent: 'flex-end',
    },
};
