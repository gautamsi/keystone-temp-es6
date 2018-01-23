"use strict";
// ==============================
// Button
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("../../../utils/css");
const color_1 = require("../../../utils/color");
const theme_1 = require("../../../theme");
// Common Styles
// ----------------
exports.common = {
    // Base Button
    // ----------------
    base: {
        'appearance': 'none',
        'background': 'none',
        'borderWidth': theme_1.theme.button.borderWidth,
        'borderStyle': 'solid',
        'borderColor': 'transparent',
        'borderRadius': theme_1.theme.button.borderRadius,
        'cursor': 'pointer',
        'display': 'inline-block',
        'fontWeight': theme_1.theme.button.font.weight,
        'height': theme_1.theme.component.height,
        'lineHeight': theme_1.theme.component.lineHeight,
        'marginBottom': 0,
        'padding': `0 ${theme_1.theme.button.paddingHorizontal}`,
        'outline': 0,
        'textAlign': 'center',
        'touchAction': 'manipulation',
        'userSelect': 'none',
        'verticalAlign': 'middle',
        'whiteSpace': 'nowrap',
        ':hover': {
            color: theme_1.theme.button.default.textColor,
            textDecoration: 'none',
        },
        ':focus': {
            color: theme_1.theme.button.default.textColor,
            textDecoration: 'none',
        },
    },
    // Block Display
    // ----------------
    block: {
        display: 'block',
        width: '100%',
    },
    // Disabled
    // ----------------
    disabled: {
        opacity: 0.4,
        pointerEvents: 'none',
    },
    // Sizes
    // ----------------
    large: {
        fontSize: theme_1.theme.font.size.large,
    },
    default: {
        fontSize: theme_1.theme.font.size.default,
    },
    small: {
        fontSize: theme_1.theme.font.size.small,
    },
    xsmall: {
        fontSize: theme_1.theme.font.size.xsmall,
        lineHeight: '1.9',
        paddingLeft: '.66em',
        paddingRight: '.66em',
    },
};
// Fill Variant
// ----------------
function buttonFillVariant(textColor, bgColor) {
    const hoverStyles = Object.assign({}, css_1.gradientVertical(color_1.lighten(bgColor, 10), color_1.darken(bgColor, 5)), { borderColor: `${color_1.darken(bgColor, 5)} ${color_1.darken(bgColor, 10)} ${color_1.darken(bgColor, 15)}`, boxShadow: '0 1px 0 rgba(0,0,0,0.1)', color: textColor, outline: 'none' });
    const focusStyles = Object.assign({}, css_1.gradientVertical(color_1.lighten(bgColor, 10), color_1.darken(bgColor, 5)), { borderColor: `${color_1.darken(bgColor, 5)} ${color_1.darken(bgColor, 10)} ${color_1.darken(bgColor, 15)}`, boxShadow: `0 0 0 3px ${color_1.fade(bgColor, 25)}`, color: textColor, outline: 'none' });
    const activeStyles = {
        backgroundColor: color_1.darken(bgColor, 10),
        backgroundImage: 'none',
        borderColor: `${color_1.darken(bgColor, 25)} ${color_1.darken(bgColor, 15)} ${color_1.darken(bgColor, 10)}`,
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    };
    return {
        base: Object.assign({}, css_1.gradientVertical(color_1.lighten(bgColor, 5), color_1.darken(bgColor, 10), bgColor), { 'borderColor': `${color_1.darken(bgColor, 10)} ${color_1.darken(bgColor, 20)} ${color_1.darken(bgColor, 25)}`, 'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)', 'color': textColor, 'fontWeight': 400, 'textShadow': '0 -1px 0 rgba(0, 0, 0, 0.25)', ':hover': hoverStyles, ':focus': focusStyles, ':active': activeStyles }),
        active: activeStyles,
    };
}
// TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)
function buttonFillDefault() {
    const borderColor = theme_1.theme.input.border.color.default;
    const hoverStyles = Object.assign({}, css_1.gradientVertical('#fff', '#eee'), { borderColor: `${color_1.darken(borderColor, 5)} ${color_1.darken(borderColor, 5)} ${color_1.darken(borderColor, 10)}`, boxShadow: '0 1px 0 rgba(0,0,0,0.1)', color: theme_1.theme.color.text });
    const focusStyles = {
        borderColor: theme_1.theme.color.primary,
        boxShadow: `0 0 0 3px ${color_1.fade(theme_1.theme.color.primary, 10)}`,
        color: theme_1.theme.color.text,
        outline: 'none',
    };
    const activeStyles = {
        background: '#e6e6e6',
        borderColor: color_1.darken(borderColor, 10),
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        color: theme_1.theme.color.text,
    };
    return {
        base: Object.assign({}, css_1.gradientVertical('#fafafa', '#eaeaea'), { 'borderColor': `${borderColor} ${color_1.darken(borderColor, 6)} ${color_1.darken(borderColor, 12)}`, 'color': theme_1.theme.color.text, 'textShadow': '0 1px 0 white', ':hover': hoverStyles, ':focus': focusStyles, ':active': activeStyles }),
        // gross hack
        active: Object.assign({}, activeStyles, { ':hover': activeStyles, ':focus': Object.assign({}, activeStyles, focusStyles, { boxShadow: `0 0 0 3px ${color_1.fade(theme_1.theme.color.primary, 10)}, inset 0 1px 2px rgba(0, 0, 0, 0.1)` }), ':active': activeStyles }),
    };
}
exports.fill = (color) => {
    switch (color) {
        case 'default':
            return buttonFillDefault();
        case 'cancel':
        case 'delete':
            return buttonFillVariant('white', theme_1.theme.button.danger.bgColor);
        default:
            return buttonFillVariant('white', theme_1.theme.button[color].bgColor);
    }
};
// Hollow Variant
// ----------------
function buttonHollowVariant(textColor, borderColor) {
    const focusAndHoverStyles = {
        backgroundImage: 'none',
        backgroundColor: color_1.fade(borderColor, 15),
        borderColor: color_1.darken(borderColor, 15),
        boxShadow: 'none',
        color: textColor,
        outline: 'none',
    };
    const focusOnlyStyles = {
        boxShadow: `0 0 0 3px ${color_1.fade(borderColor, 10)}`,
    };
    const activeStyles = {
        backgroundColor: color_1.fade(borderColor, 35),
        borderColor: color_1.darken(borderColor, 25),
        boxShadow: 'none',
    };
    return {
        base: {
            'background': 'none',
            'borderColor': borderColor,
            'color': textColor,
            ':hover': focusAndHoverStyles,
            ':focus ': Object.assign({}, focusAndHoverStyles, focusOnlyStyles),
            ':active': activeStyles,
        },
        active: activeStyles,
    };
}
exports.hollow = (color) => {
    // TODO: better handling of cancel and delete colors
    if (color === 'cancel' || color === 'delete')
        color = 'danger';
    return buttonHollowVariant(theme_1.theme.button[color].bgColor, theme_1.theme.button[color].borderColor);
};
// Link Variant
// ----------------
function buttonLinkVariant(textColor, hoverColor) {
    const hoverStyles = {
        color: hoverColor,
        textDecoration: 'underline',
    };
    return {
        base: {
            'background': 'none',
            'border': 0,
            'boxShadow': 'none',
            'color': textColor,
            'fontWeight': 'normal',
            'outline': 'none',
            ':hover': hoverStyles,
            ':focus': hoverStyles,
            ':active': hoverStyles,
        },
        active: hoverStyles,
    };
}
function buttonLinkDelete() {
    const styles = buttonLinkVariant(theme_1.theme.color.gray40, theme_1.theme.color.danger);
    const hoverStyles = Object.assign({}, css_1.gradientVertical(color_1.lighten(theme_1.theme.color.danger, 10), color_1.darken(theme_1.theme.color.danger, 10)), { backgroundColor: theme_1.theme.color.danger, borderColor: `${color_1.darken(theme_1.theme.color.danger, 4)} ${color_1.darken(theme_1.theme.color.danger, 8)} ${color_1.darken(theme_1.theme.color.danger, 12)}`, boxShadow: '0 1px 0 rgba(0,0,0,0.1)', color: 'white', textDecoration: 'none' });
    const activeStyles = {
        backgroundColor: color_1.darken(theme_1.theme.color.danger, 4),
        backgroundImage: 'none',
        borderColor: `${color_1.darken(theme_1.theme.color.danger, 12)} ${color_1.darken(theme_1.theme.color.danger, 8)} ${color_1.darken(theme_1.theme.color.danger, 8)}`,
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        color: 'white',
    };
    return {
        base: Object.assign({}, styles.base, { ':hover': hoverStyles, ':focus': hoverStyles, ':active': activeStyles }),
        active: activeStyles,
    };
}
exports.link = (color) => {
    switch (color) {
        case 'default':
            return buttonLinkVariant(theme_1.theme.color.link, theme_1.theme.color.linkHover);
        case 'cancel':
            return buttonLinkVariant(theme_1.theme.color.gray40, theme_1.theme.color.danger);
        case 'delete':
            return buttonLinkDelete();
        default:
            return buttonLinkVariant(theme_1.theme.color[color], theme_1.theme.color[color]);
    }
};
