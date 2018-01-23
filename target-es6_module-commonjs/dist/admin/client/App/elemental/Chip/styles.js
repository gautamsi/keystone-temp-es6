"use strict";
// ==============================
// Alert
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const colors_1 = require("./colors");
const theme_1 = require("../../../theme");
const css_1 = require("../../../utils/css");
// Prepare variants
const colorVariants = {};
Object.keys(colors_1.default).forEach(color => {
    const hoverStyles = {
        backgroundColor: colors_1.default[color].backgroundHover,
    };
    colorVariants['button__' + color] = {
        backgroundColor: colors_1.default[color].background,
        color: colors_1.default[color].text,
        ':hover': hoverStyles,
        ':focus': hoverStyles,
        ':active': {
            backgroundColor: colors_1.default[color].backgroundActive,
        },
    };
});
exports.default = Object.assign({ chip: {
        display: 'inline-block',
        fontSize: theme_1.theme.font.size.small,
        fontWeight: 500,
        marginRight: '0.5em',
        overflow: 'hidden',
        lineHeight: '2.2em',
    }, 
    // tagnames
    button: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'block',
        float: 'left',
        padding: '0 .9em',
        outline: 'none',
        // make pills - exaggerate the padding toward the radii so it looks even
        ':first-child': Object.assign({}, css_1.borderLeftRadius('3em'), { paddingLeft: '1.1em' }),
        ':last-child': Object.assign({}, css_1.borderRightRadius('3em'), { paddingRight: '1.1em' }),
    }, 
    // provide separation between the label and clear buttons
    // floating stops the margins from collapsing into eaching
    label: { marginRight: 1 }, clear: { marginLeft: 1 } }, colorVariants);
