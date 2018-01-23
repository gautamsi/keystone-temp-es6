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
import { FormField, FormLabel } from '../../admin/client/App/elemental';
import { theme } from '../../admin/client/theme';
export const NestedFormField = (_a) => {
    var { children, className, label } = _a, props = __rest(_a, ["children", "className", "label"]);
    return (React.createElement(FormField, Object.assign({}, props),
        React.createElement(FormLabel, { cssStyles: classes.label }, label),
        children));
};
const classes = {
    label: {
        color: theme.color.gray40,
        fontSize: theme.font.size.small,
        [`@media (min-width: ${theme.breakpoint.tabletLandscapeMin})`]: {
            paddingLeft: '1em',
        },
    },
};
