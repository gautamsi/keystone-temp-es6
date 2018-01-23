/* eslint quote-props: ["error", "as-needed"] */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { FormField as Field } from '../../elemental';
import { Glyph } from '../Glyph';
export const GlyphField = (_a) => {
    var { children, glyph, glyphColor, glyphSize, position } = _a, props = __rest(_a, ["children", "glyph", "glyphColor", "glyphSize", "position"]);
    const isLeft = position === 'left';
    const isRight = position === 'right';
    const glyphStyles = {};
    if (isLeft)
        glyphStyles.marginRight = '0.5em';
    if (isRight)
        glyphStyles.marginLeft = '0.5em';
    const icon = (React.createElement(Glyph, { cssStyles: classes.glyph, color: glyphColor, name: glyph, size: glyphSize, style: glyphStyles }));
    return (React.createElement(Field, Object.assign({ cssStyles: classes.wrapper }, props),
        isLeft && icon,
        children,
        isRight && icon));
};
GlyphField.defaultProps = {
    position: 'left',
};
const classes = {
    wrapper: {
        alignItems: 'center',
        display: 'flex',
    },
    glyph: {
        display: 'inline-block',
        marginTop: '-0.125em',
        verticalAlign: 'middle',
    },
};
