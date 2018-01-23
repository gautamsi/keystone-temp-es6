"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../../../theme");
const color_1 = require("../../../utils/color");
const baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
    baseColors[color] = {
        background: color_1.fade(theme_1.theme.color[color], 10),
        backgroundActive: color_1.fade(theme_1.theme.color[color], 20),
        backgroundHover: color_1.fade(theme_1.theme.color[color], 15),
        text: theme_1.theme.color[color],
    };
});
const invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
    invertedColors[color + '__inverted'] = {
        background: theme_1.theme.color[color],
        backgroundActive: color_1.lighten(theme_1.theme.color[color], 5),
        backgroundHover: color_1.lighten(theme_1.theme.color[color], 15),
        text: 'white',
    };
});
exports.default = Object.assign({ default: {
        background: theme_1.theme.color.gray10,
        backgroundActive: theme_1.theme.color.gray20,
        backgroundHover: theme_1.theme.color.gray15,
        text: theme_1.theme.color.gray60,
    } }, baseColors, { 
    // inverted
    default__inverted: {
        background: theme_1.theme.color.gray60,
        backgroundActive: color_1.lighten(theme_1.theme.color.gray60, 5),
        backgroundHover: color_1.lighten(theme_1.theme.color.gray60, 15),
        text: 'white',
    } }, invertedColors);
