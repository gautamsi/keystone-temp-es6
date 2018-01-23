"use strict";
// ==============================
// Glyph
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
const sizes_1 = require("./sizes");
// Prepare variants
const colorVariants = {};
Object.keys(colors_1.default).forEach(color => {
    colorVariants[`color__${color}`] = {
        color: colors_1.default[color],
    };
});
// Prepare sizes
const sizeVariants = {};
Object.keys(sizes_1.sizes).forEach(size => {
    sizeVariants[`size__${size}`] = {
        fontSize: sizes_1.sizes[size],
    };
});
exports.default = Object.assign({ glyph: {} }, colorVariants, sizeVariants);
