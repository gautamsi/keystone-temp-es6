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
const PropTypes = require("prop-types");
const glamor_1 = require("glamor");
const GlyphButton_1 = require("../GlyphButton");
const theme_1 = require("../../../theme");
exports.ModalHeader = (_a, { onClose, }) => {
    var { children, className, showCloseButton, text } = _a, props = __rest(_a, ["children", "className", "showCloseButton", "text"]);
    // Property Violation
    if (children && text) {
        console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
    }
    return (React.createElement("div", Object.assign({}, props, { className: `${glamor_1.css(classes.header, className)}` }),
        React.createElement("div", { className: `${glamor_1.css(classes.grow)}` }, text ? (React.createElement("h4", { className: `${glamor_1.css(classes.text)}` }, text)) : children),
        !!onClose && showCloseButton && (React.createElement(GlyphButton_1.GlyphButton, { cssStyles: classes.close, color: "cancel", glyph: "x", onClick: onClose, variant: "link" }))));
};
exports.ModalHeader.contextTypes = {
    onClose: PropTypes.func.isRequired,
};
const classes = {
    header: {
        alignItems: 'center',
        borderBottom: `2px solid ${theme_1.theme.color.gray10}`,
        display: 'flex',
        paddingBottom: theme_1.theme.modal.padding.header.vertical,
        paddingLeft: theme_1.theme.modal.padding.header.horizontal,
        paddingRight: theme_1.theme.modal.padding.header.horizontal,
        paddingTop: theme_1.theme.modal.padding.header.vertical,
    },
    // fill space to push the close button right
    grow: {
        flexGrow: 1,
    },
    // title text
    text: {
        color: 'inherit',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1,
        margin: 0,
    },
    close: undefined,
};
