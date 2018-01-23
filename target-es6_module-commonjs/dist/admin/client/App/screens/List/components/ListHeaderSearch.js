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
const theme_1 = require("../../../../theme");
const color_1 = require("../../../../utils/color");
const elemental_1 = require("../../../elemental");
exports.ListHeaderSearch = (_a) => {
    var { focusInput, handleChange, handleClear, handleKeyup, value } = _a, props = __rest(_a, ["focusInput", "handleChange", "handleClear", "handleKeyup", "value"]);
    return (React.createElement("div", Object.assign({}, props, { className: `${glamor_1.css(classes.wrapper)}` }),
        React.createElement(elemental_1.FormInput, { "data-search-input-field": true, onChange: handleChange, onKeyUp: handleKeyup, placeholder: "Search", value: value }),
        React.createElement("button", { className: `${glamor_1.css(classes.icon, !!value.length && classes.iconWhenClear)}`, "data-search-input-field-clear-icon": true, disabled: !value.length, onClick: value.length ? handleClear : undefined, title: "Clear search query", type: "button" },
            React.createElement(elemental_1.Glyph, { name: value.length ? 'x' : 'search' }))));
    // value.length && handleClear
};
const clearHoverAndFocusStyles = {
    color: theme_1.theme.color.danger,
    outline: 0,
    textDecoration: 'none',
};
const classes = {
    wrapper: {
        position: 'relative',
    },
    icon: {
        background: 'none',
        border: 'none',
        color: theme_1.theme.color.gray40,
        height: '100%',
        position: 'absolute',
        right: 0,
        textAlign: 'center',
        top: 0,
        width: '2.2em',
        zIndex: 2,
    },
    iconWhenClear: {
        ':hover': clearHoverAndFocusStyles,
        ':focus': clearHoverAndFocusStyles,
        ':active': {
            color: color_1.darken(theme_1.theme.color.danger, 10),
        },
    },
};
