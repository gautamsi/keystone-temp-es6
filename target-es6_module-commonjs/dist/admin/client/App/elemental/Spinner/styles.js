"use strict";
// ==============================
// Spinner
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = require("glamor");
const theme_1 = require("../../../theme");
const colors_1 = require("./colors");
const sizes_1 = require("./sizes");
// Prepare variants
const colorVariants = {};
colors_1.default.forEach(color => {
    colorVariants[`color__${color}`] = {
        backgroundColor: theme_1.theme.spinner.color[color],
    };
});
// Prepare sizes
const sizeVariants = {};
sizes_1.default.forEach(size => {
    sizeVariants[`size__${size}`] = {
        fontSize: theme_1.theme.spinner.size[size],
    };
});
// Declare animation keyframes
const _keyframes = glamor_1.keyframes('pulse', {
    '0%, 80%, 100%': { opacity: 0 },
    '40%': { opacity: 1 },
});
exports.default = Object.assign({ base: {
        display: 'inline-block',
        lineHeight: 1,
        textAlign: 'center',
        verticalAlign: 'middle',
        width: '5em',
    }, small: { fontSize: 4 }, medium: { fontSize: 8 }, large: { fontSize: 16 }, 
    // text
    text: {
        border: 0,
        clip: 'rect(0,0,0,0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: 1,
    }, 
    // dots
    dot: {
        animationName: _keyframes,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        borderRadius: '1em',
        display: 'inline-block',
        height: '1em',
        verticalAlign: 'top',
        width: '1em',
    }, dot__first: {
        animationDelay: '80ms',
        marginLeft: '1em',
    }, dot__second: {
        animationDelay: '160ms',
        marginLeft: '1em',
    }, dot__third: {
        animationDelay: '320ms',
        marginLeft: '1em',
    } }, colorVariants, sizeVariants);
