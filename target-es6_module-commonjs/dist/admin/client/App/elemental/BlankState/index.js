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
const theme_1 = require("../../../theme");
exports.BlankState = (_a) => {
    var { children, heading, component: Component } = _a, props = __rest(_a, ["children", "heading", "component"]);
    props.className = glamor_1.css(classes.container, props.className);
    return (React.createElement(Component, Object.assign({}, props),
        !!heading && React.createElement("h2", { "data-e2e-blank-state-heading": true, className: `${glamor_1.css(classes.heading)}` }, heading),
        children));
};
exports.BlankState.defaultProps = {
    component: 'div',
};
/* eslint quote-props: ["error", "as-needed"] */
const classes = {
    container: {
        backgroundColor: theme_1.theme.blankstate.background,
        borderRadius: theme_1.theme.blankstate.borderRadius,
        color: theme_1.theme.blankstate.color,
        paddingBottom: theme_1.theme.blankstate.paddingVertical,
        paddingLeft: theme_1.theme.blankstate.paddingHorizontal,
        paddingRight: theme_1.theme.blankstate.paddingHorizontal,
        paddingTop: theme_1.theme.blankstate.paddingVertical,
        textAlign: 'center',
    },
    heading: {
        color: 'inherit',
        ':last-child': {
            marginBottom: 0,
        },
    },
};
