"use strict";
// ==============================
// Segmented Control
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const colors_1 = require("./colors");
const theme_1 = require("../../../theme");
// Prepare variants
const colorVariants = {};
Object.keys(colors_1.default).forEach(color => {
    const pseudoStyles = {
        backgroundColor: colors_1.default[color],
        color: 'white',
    };
    colorVariants['button__' + color] = {
        backgroundColor: colors_1.default[color],
        color: 'white',
        ':hover': pseudoStyles,
        ':focus': pseudoStyles,
        ':active': pseudoStyles,
    };
});
exports.default = Object.assign({ control: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme_1.theme.input.border.color.default,
        borderRadius: '0.4em',
        display: 'flex',
        fontSize: theme_1.theme.font.size.small,
        paddingLeft: 1,
        paddingRight: 1,
    }, control__inline: {
        display: 'inline-flex',
    }, 
    // buttons
    button: {
        background: 'none',
        border: 0,
        borderRadius: '0.25em',
        flexGrow: 1,
        margin: '2px 1px',
        padding: '0.3em 0.9em',
        outline: 0,
        ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
        ':focus': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
        ':active': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
    }, button__equalWidth: {
        flex: '1 1 0',
    }, button__cropText: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }, button__disabled: {
        opacity: 0.6,
        pointerEvents: 'none',
    } }, colorVariants);
