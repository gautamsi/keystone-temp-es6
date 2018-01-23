"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = require("glamor");
const React = require("react");
const theme_1 = require("../../../../theme");
const ListSort_1 = require("./ListSort");
exports.ListHeaderTitle = (_a) => {
    var { activeSort, availableColumns, handleSortSelect, title } = _a, props = __rest(_a, ["activeSort", "availableColumns", "handleSortSelect", "title"]);
    return (React.createElement("h2", Object.assign({ className: `${glamor_1.css(classes.heading)}` }, props),
        title,
        React.createElement(ListSort_1.ListSort, { activeSort: activeSort, availableColumns: availableColumns, handleSortSelect: handleSortSelect })));
};
const classes = {
    heading: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.mobileMax})`]: {
            fontSize: '1.25em',
            fontWeight: 500,
        },
    },
};
