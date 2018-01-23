"use strict";
// ==============================
// Form Input
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../../../theme");
exports.default = {
    'FormInput': {
        'appearance': 'none',
        'backgroundColor': theme_1.theme.input.background.default,
        'backgroundImage': 'none',
        'borderColor': theme_1.theme.input.border.color.default,
        'borderRadius': theme_1.theme.input.border.radius,
        'borderStyle': 'solid',
        'borderWidth': theme_1.theme.input.border.width,
        'boxShadow': theme_1.theme.input.boxShadow,
        'color': 'inherit',
        'display': 'block',
        'height': theme_1.theme.input.height,
        'lineHeight': theme_1.theme.input.lineHeight,
        'padding': `0 ${theme_1.theme.input.paddingHorizontal}`,
        'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
        'width': '100%',
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
    'FormInput--disabled': {
        backgroundColor: theme_1.theme.input.background.disabled,
        pointerEvents: 'none',
    },
    // sizes
    'FormInput__size--small': {
        fontSize: theme_1.theme.font.size.small,
    },
    'FormInput__size--large': {
        fontSize: theme_1.theme.font.size.large,
    },
};
