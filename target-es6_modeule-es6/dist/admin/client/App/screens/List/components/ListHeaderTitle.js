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
import { theme } from '../../../../theme';
import { ListSort } from './ListSort';
export const ListHeaderTitle = (_a) => {
    var { activeSort, availableColumns, handleSortSelect, title } = _a, props = __rest(_a, ["activeSort", "availableColumns", "handleSortSelect", "title"]);
    return (React.createElement("h2", Object.assign({ className: `${css(classes.heading)}` }, props),
        title,
        React.createElement(ListSort, { activeSort: activeSort, availableColumns: availableColumns, handleSortSelect: handleSortSelect })));
};
const classes = {
    heading: {
        [`@media (maxWidth: ${theme.breakpoint.mobileMax})`]: {
            fontSize: '1.25em',
            fontWeight: 500,
        },
    },
};
