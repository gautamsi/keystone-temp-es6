"use strict";
// ==============================
// Form Select
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const theme_1 = require("../../../theme");
const color_1 = require("../../../utils/color");
exports.default = {
    container: {
        position: 'relative',
    },
    // select node
    select: {
        appearance: 'none',
        backgroundColor: theme_1.theme.input.background.default,
        backgroundImage: 'none',
        borderColor: theme_1.theme.input.border.color.default,
        borderBottomColor: color_1.darken(theme_1.theme.input.border.color.default, 4),
        borderTopColor: color_1.lighten(theme_1.theme.input.border.color.default, 4),
        borderRadius: theme_1.theme.input.border.radius,
        borderStyle: 'solid',
        borderWidth: theme_1.theme.input.border.width,
        boxShadow: theme_1.theme.select.boxShadow,
        color: 'inherit',
        display: 'block',
        height: theme_1.theme.input.height,
        lineHeight: theme_1.theme.input.lineHeight,
        padding: `0 ${theme_1.theme.input.paddingHorizontal}`,
        transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
        width: '100%',
        ':hover': {
            borderColor: theme_1.theme.input.border.color.hover,
            outline: 0,
        },
        ':focus': {
            borderColor: theme_1.theme.input.border.color.focus,
            boxShadow: theme_1.theme.input.boxShadowFocus,
            outline: 0,
        },
    },
    'select--disabled': {
        backgroundColor: theme_1.theme.input.background.disabled,
        pointerEvents: 'none',
    },
    // arrows
    arrows: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: theme_1.theme.input.height,
        justifyContent: 'center',
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        width: theme_1.theme.input.height,
    },
    arrow: {
        borderLeft: '0.3em solid transparent',
        borderRight: '0.3em solid transparent',
        display: 'inline-block',
        height: 0,
        verticalAlign: 'middle',
        width: 0,
        zIndex: 1,
    },
    arrowTop: {
        borderBottom: '0.3em solid',
        marginBottom: '0.1em',
    },
    arrowBottom: {
        borderTop: '0.3em solid',
        marginTop: '0.1em',
    },
};
