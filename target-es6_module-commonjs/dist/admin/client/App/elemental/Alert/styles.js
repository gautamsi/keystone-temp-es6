"use strict";
// ==============================
// Alert
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const colors_1 = require("./colors");
const theme_1 = require("../../../theme");
// Prepare variants
const colorVariants = {};
Object.keys(colors_1.default).forEach(color => {
    colorVariants[color] = {
        backgroundColor: colors_1.default[color].background,
        borderColor: colors_1.default[color].border,
        color: colors_1.default[color].text,
    };
});
// Prepare headings
const headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
    headingTagnames[tag] = { color: 'inherit' };
});
const linkStyles = {
    color: 'inherit',
    textDecoration: 'underline',
    ':hover': { color: 'inherit' },
    ':focus': { color: 'inherit' },
};
exports.default = Object.assign({ alert: {
        borderColor: 'transparent',
        borderRadius: theme_1.theme.alert.borderRadius,
        borderStyle: 'solid',
        borderWidth: theme_1.theme.alert.borderWidth,
        margin: theme_1.theme.alert.margin,
        padding: theme_1.theme.alert.padding,
    }, 
    // tagnames
    a: linkStyles, Link: linkStyles, strong: {
        fontWeight: 500,
    } }, headingTagnames, colorVariants);
