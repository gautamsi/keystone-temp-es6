"use strict";
/**
    Linear Gradient
    ==============================

    Short-hand helper for adding a linear gradient to your component.

    - @param {String} sideOrCorner
    - @param {String} top
    - @param {String} bottom
    - @param {String} base (optional)
    - @returns {Object} css linear gradient declaration

    Spread the declaration into your component class:
    ------------------------------

    myComponentClass: {
        ...linearGradient(red, blue),
    }
*/
Object.defineProperty(exports, "__esModule", { value: true });
function linearGradient(direction, top, bottom, base = '') {
    return {
        background: `linear-gradient(${direction}, ${top} 0%, ${bottom} 100%) ${base}`,
    };
}
exports.linearGradient = linearGradient;
// Vertical Gradient
function gradientVertical(top, bottom, base = '') {
    return linearGradient('to bottom', top, bottom, base);
}
exports.gradientVertical = gradientVertical;
// Horizontal Gradient
function gradientHorizontal(top, bottom, base = '') {
    return linearGradient('to right', top, bottom, base);
}
exports.gradientHorizontal = gradientHorizontal;
/**
    Border Radius
    ==============================

    Short-hand helper for border radii
*/
// top
function borderTopRadius(radius) {
    return {
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
    };
}
exports.borderTopRadius = borderTopRadius;
// right
function borderRightRadius(radius) {
    return {
        borderBottomRightRadius: radius,
        borderTopRightRadius: radius,
    };
}
exports.borderRightRadius = borderRightRadius;
// bottom
function borderBottomRadius(radius) {
    return {
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
    };
}
exports.borderBottomRadius = borderBottomRadius;
// left
function borderLeftRadius(radius) {
    return {
        borderBottomLeftRadius: radius,
        borderTopLeftRadius: radius,
    };
}
exports.borderLeftRadius = borderLeftRadius;
