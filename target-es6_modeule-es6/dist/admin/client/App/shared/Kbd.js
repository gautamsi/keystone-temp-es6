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
import { css } from 'glamor';
import { theme } from '../../theme';
import { darken, lighten } from '../../utils/color';
export const Kbd = (_a) => {
    var props = __rest(_a, []);
    props.className = `${css(classes.kbd)}`;
    return React.createElement("kbd", Object.assign({}, props));
};
const classes = {
    kbd: {
        backgroundColor: theme.color.body,
        borderRadius: 3,
        border: `1px solid #ccc`,
        borderBottomColor: darken('#ccc', 4),
        borderTopColor: lighten('#ccc', 4),
        boxShadow: `0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset`,
        display: 'inline-block',
        fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
        fontSize: '0.85em',
        fontWeight: 700,
        lineHeight: 'inherit',
        padding: '1px 4px',
        whiteSpace: 'nowrap',
        // little hack to tweak "visual-middle" alignment
        position: 'relative',
        top: -1,
    },
};
