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
import { css } from 'glamor';
import { Button } from '../../elemental';
export const DropdownButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Button, Object.assign({}, props),
        children,
        React.createElement("span", { className: `${css(classes.arrow)}` })));
};
// NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it
const classes = {
    arrow: {
        borderLeft: '0.3em solid transparent',
        borderRight: '0.3em solid transparent',
        borderTop: '0.3em solid',
        display: 'inline-block',
        height: 0,
        marginTop: '-0.125em',
        verticalAlign: 'middle',
        width: 0,
        // add spacing
        ':first-child': {
            marginRight: '0.5em',
        },
        ':last-child': {
            marginLeft: '0.5em',
        },
    },
};
