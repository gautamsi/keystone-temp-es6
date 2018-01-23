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
const color_1 = require("../../../utils/color");
/* eslint quote-props: ["error", "as-needed"] */
exports.FormInputNoedit = (_a) => {
    var { className, component: Component, cropText, multiline, noedit, // NOTE not used, just removed from props
    type } = _a, props = __rest(_a, ["className", "component", "cropText", "multiline", "noedit", "type"]);
    props['className'] = glamor_1.css(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, (props.href || props.onClick) ? classes.anchor : null, className);
    return React.createElement(Component, Object.assign({}, props));
};
exports.FormInputNoedit.defaultProps = {
    component: 'span',
};
const anchorHoverAndFocusStyles = {
    backgroundColor: color_1.fade(theme_1.theme.color.link, 10),
    borderColor: color_1.fade(theme_1.theme.color.link, 10),
    color: theme_1.theme.color.link,
    outline: 'none',
    textDecoration: 'underline',
};
const classes = {
    noedit: {
        appearance: 'none',
        backgroundColor: theme_1.theme.input.background.noedit,
        backgroundImage: 'none',
        borderColor: theme_1.theme.input.border.color.noedit,
        borderRadius: theme_1.theme.input.border.radius,
        borderStyle: 'solid',
        borderWidth: theme_1.theme.input.border.width,
        color: theme_1.theme.color.gray80,
        display: 'inline-block',
        height: theme_1.theme.input.height,
        lineHeight: theme_1.theme.input.lineHeight,
        padding: `0 ${theme_1.theme.input.paddingHorizontal}`,
        transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
        verticalAlign: 'middle',
        // prevent empty inputs from collapsing by adding content
        ':empty:before': {
            color: theme_1.theme.color.gray40,
            content: '"(no value)"',
        },
    },
    cropText: undefined,
    multiline: {
        display: 'block',
        height: 'auto',
        lineHeight: '1.4',
        paddingBottom: '0.6em',
        paddingTop: '0.6em',
    },
    // indicate clickability when using an anchor
    anchor: {
        backgroundColor: color_1.fade(theme_1.theme.color.link, 5),
        borderColor: color_1.fade(theme_1.theme.color.link, 10),
        color: theme_1.theme.color.link,
        marginRight: 5,
        minWidth: 0,
        textDecoration: 'none',
        ':hover': anchorHoverAndFocusStyles,
        ':focus': anchorHoverAndFocusStyles,
    },
};
