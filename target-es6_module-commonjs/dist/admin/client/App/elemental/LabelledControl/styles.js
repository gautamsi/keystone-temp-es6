"use strict";
// ==============================
// Alert
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint quote-props: ["error", "as-needed"] */
const theme_1 = require("../../../theme");
exports.default = {
    wrapper: {
        display: 'block',
        height: theme_1.theme.input.height,
        lineHeight: theme_1.theme.input.lineHeight,
    },
    wrapper__inline: {
        display: 'inline',
    },
    // checkbox or radio
    control: {
        marginRight: '0.5em',
    },
    label: {},
};
