"use strict";
// ==============================
// Container
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const sizes_1 = require("./sizes");
const theme_1 = require("../../../theme");
// Prepare sizes
const sizeVariants = {};
Object.keys(sizes_1.default).forEach(size => {
    sizeVariants[size] = {
        maxWidth: sizes_1.default[size],
    };
});
/*
    Micro clearfix hack
    1.	The space content is one way to avoid an Opera bug when the
            contenteditable attribute is included anywhere else in the document.
            Otherwise it causes space to appear at the top and bottom of elements
            that are clearfixed.
    2.	The use of `table` rather than `block` is only necessary if using
            `:before` to contain the top-margins of child elements.
*/
const clearfixStyles = {
    clear: 'both',
    content: '" "',
    display: 'table',
};
exports.default = Object.assign({ container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme_1.theme.container.gutter,
        paddingRight: theme_1.theme.container.gutter,
    }, 
    // clear floating children
    clearfix: {
        ':before': clearfixStyles,
        ':after': clearfixStyles,
    } }, sizeVariants);
