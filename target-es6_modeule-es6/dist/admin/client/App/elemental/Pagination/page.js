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
import { theme } from '../../../theme';
export const Page = (_a) => {
    var { disabled, selected } = _a, props = __rest(_a, ["disabled", "selected"]);
    props.className = css(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
    return (React.createElement("button", Object.assign({}, props)));
};
/* eslint quote-props: ["error", "as-needed"] */
const selectedStyle = {
    backgroundColor: theme.pagination.selected.background,
    borderColor: theme.pagination.selected.border,
    color: theme.pagination.selected.color,
    cursor: 'default',
    zIndex: 2,
};
const pseudoStyle = {
    backgroundColor: theme.pagination.hover.background,
    borderColor: theme.pagination.hover.border,
    color: theme.pagination.hover.color,
    outline: 'none',
};
const classes = {
    page: {
        appearance: 'none',
        background: 'none',
        border: '1px solid transparent',
        borderRadius: theme.borderRadius.default,
        color: theme.pagination.color,
        cursor: 'pointer',
        display: 'inline-block',
        float: 'left',
        marginRight: '0.25em',
        padding: '0 .7em',
        position: 'relative',
        textDecoration: 'none',
        // handle hover and focus
        ':hover': pseudoStyle,
        ':focus': pseudoStyle,
    },
    // selected page
    selected: Object.assign({}, selectedStyle, { ':hover': selectedStyle, ':focus': selectedStyle }),
    // disabled page
    disabled: {
        backgroundColor: theme.pagination.disabled.background,
        borderColor: theme.pagination.disabled.background,
        color: theme.pagination.disabled.color,
        cursor: 'default',
    },
};
export default Page;
