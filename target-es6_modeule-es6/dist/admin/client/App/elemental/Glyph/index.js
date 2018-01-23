var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { css } from 'glamor';
import * as React from 'react';
import colors from './colors';
import classes from './styles';
import { octicons } from './octicons';
// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
export const Glyph = (_a) => {
    var { cssStyles, color, component: Component, name, size } = _a, props = __rest(_a, ["cssStyles", "color", "component", "name", "size"]);
    const colorIsValidType = Object.keys(colors).indexOf(color) >= 0;
    props.className = css(classes.glyph, colorIsValidType && classes['color__' + color], classes['size__' + size], cssStyles) + ` ${octicons[name]}`;
    if (props.className) {
        props.className += (' ' + props.className);
    }
    // support random color strings
    props.style = Object.assign({ color: !colorIsValidType ? color : null }, props.style);
    return React.createElement(Component, Object.assign({}, props));
};
Glyph.defaultProps = {
    component: 'i',
    color: 'inherit',
    size: 'small',
};
