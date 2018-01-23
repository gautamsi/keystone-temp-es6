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
import { Button } from '../../elemental';
import { Glyph } from '../Glyph';
export const GlyphButton = (_a) => {
    var { children, glyph, glyphColor, glyphSize, glyphStyle, position } = _a, props = __rest(_a, ["children", "glyph", "glyphColor", "glyphSize", "glyphStyle", "position"]);
    const isDefault = position === 'default';
    const isLeft = position === 'left';
    const isRight = position === 'right';
    const offset = {};
    if (isLeft)
        offset.marginRight = '0.5em';
    if (isRight)
        offset.marginLeft = '0.5em';
    const glyphStyles = Object.assign({}, offset, glyphStyle);
    const icon = (React.createElement(Glyph, { cssStyles: classes.glyph, color: glyphColor, name: glyph, size: glyphSize, style: glyphStyles }));
    return (React.createElement(Button, Object.assign({}, props),
        (isDefault || isLeft) && icon,
        children,
        isRight && icon));
};
GlyphButton.defaultProps = {
    glyphStyle: {},
    position: 'default',
};
const classes = {
    glyph: {
        display: 'inline-block',
        marginTop: '-0.125em',
        verticalAlign: 'middle',
    },
};
