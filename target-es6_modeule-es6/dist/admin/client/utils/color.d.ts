/**
    Fade Color
    ==============================

    Takes a hexidecimal color, converts it to RGB and applies an alpha value.

    @param {String} color
    @param {Number} opacity (0-100)

    1. convert hex to RGB
    2. combine and add alpha channel
*/
export declare function fade(color: any, opacity?: number): string;
/**
    Shade Color
    ==============================

    Takes a hexidecimal color, converts it to RGB and lightens or darkens

    @param {String} color
    @param {Number} opacity (0-100)

    1. do fancy RGB bitwise operations
    2. combine back into a hex value
*/
export declare function shade(color: any, percent: any): string;
export declare const lighten: typeof shade;
export declare function darken(color: any, percent: any): string;
/**
    Blend Color
    ==============================

    Takes two hexidecimal colors and blend them together

    @param {String} color1
    @param {String} color2
    @param {Number} percent (0-100)

    1. do fancy RGB bitwise operations
    2. combine back into a hex value
*/
export declare function blend(color1: any, color2: any, percent: any): string;
