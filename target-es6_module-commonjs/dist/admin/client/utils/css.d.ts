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
export declare function linearGradient(direction: any, top: any, bottom: any, base?: string): {
    background: string;
};
export declare function gradientVertical(top: any, bottom: any, base?: string): {
    background: string;
};
export declare function gradientHorizontal(top: any, bottom: any, base?: string): {
    background: string;
};
/**
    Border Radius
    ==============================

    Short-hand helper for border radii
*/
export declare function borderTopRadius(radius: any): {
    borderTopLeftRadius: any;
    borderTopRightRadius: any;
};
export declare function borderRightRadius(radius: any): {
    borderBottomRightRadius: any;
    borderTopRightRadius: any;
};
export declare function borderBottomRadius(radius: any): {
    borderBottomLeftRadius: any;
    borderBottomRightRadius: any;
};
export declare function borderLeftRadius(radius: any): {
    borderBottomLeftRadius: any;
    borderTopLeftRadius: any;
};
