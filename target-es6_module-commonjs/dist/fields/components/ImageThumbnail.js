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
const elemental_1 = require("../../admin/client/App/elemental");
const theme_1 = require("../../admin/client/theme");
// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
const ICON_MAP = {
    loading: '',
    remove: 'mega-octicon octicon-trashcan',
    upload: 'mega-octicon octicon-cloud-upload',
};
exports.ImageThumbnail = (_a) => {
    var { component, mask } = _a, props = __rest(_a, ["component", "mask"]);
    const maskUI = mask ? (React.createElement("div", { className: glamor_1.css(classes.mask) + ` ${ICON_MAP[mask]}` }, mask === 'loading'
        ? React.createElement(elemental_1.Spinner, { color: "inverted" })
        : null)) : null;
    // apply hover and focus styles only when using an anchor
    props.className = glamor_1.css(classes.base, component === 'a' ? classes.anchor : null, props.className);
    // append the mask UI to children
    props.children = [].concat(props.children, [maskUI]);
    return React.createElement(component, props);
};
exports.ImageThumbnail.defaultProps = {
    component: 'span',
};
/* eslint quote-props: ["error", "as-needed"] */
const GUTTER_WIDTH = 4;
const hoverAndFocusStyles = {
    borderColor: theme_1.theme.input.border.color.focus,
    outline: 'none',
};
const classes = {
    base: {
        backgroundColor: 'white',
        borderRadius: theme_1.theme.borderRadius.default,
        border: `1px solid ${theme_1.theme.input.border.color.default}`,
        display: 'inline-block',
        height: 'auto',
        lineHeight: '1',
        maxWidth: '100%',
        padding: GUTTER_WIDTH,
        position: 'relative',
    },
    anchor: {
        ':hover': hoverAndFocusStyles,
        ':focus': Object.assign({}, hoverAndFocusStyles, { boxShadow: theme_1.theme.input.boxShadowFocus }),
    },
    // mask
    mask: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: GUTTER_WIDTH,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        left: GUTTER_WIDTH,
        lineHeight: 90,
        overflow: 'hidden',
        position: 'absolute',
        right: GUTTER_WIDTH,
        textAlign: 'center',
        top: GUTTER_WIDTH,
    },
};
