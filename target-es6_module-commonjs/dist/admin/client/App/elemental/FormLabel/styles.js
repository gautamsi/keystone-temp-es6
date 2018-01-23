"use strict";
// ==============================
// Form Label
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../../../theme");
exports.default = {
    'FormLabel': {
        color: theme_1.theme.form.label.color,
        fontSize: theme_1.theme.form.label.fontSize,
        fontWeight: theme_1.theme.form.label.fontWeight,
        display: 'inline-block',
        marginBottom: '0.5em',
    },
    // when inside a horizontal form
    'FormLabel--form-layout-horizontal': {
        [`@media (min-width: ${theme_1.theme.breakpoint.tabletLandscapeMin})`]: {
            display: 'table-cell',
            lineHeight: theme_1.theme.component.lineHeight,
            marginBottom: 0,
            paddingRight: 5,
            verticalAlign: 'top',
            width: theme_1.theme.form.label.width,
        },
    },
    // crop long text
    'FormLabel--crop-text': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};
