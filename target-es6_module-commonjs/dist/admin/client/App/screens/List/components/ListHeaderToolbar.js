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
const React = require("react");
const elemental_1 = require("../../../elemental");
const theme_1 = require("../../../../theme");
const ListColumnsForm_1 = require("./ListColumnsForm");
const ListDownloadForm_1 = require("./ListDownloadForm");
const ListHeaderSearch_1 = require("./ListHeaderSearch");
const ListFiltersAdd_1 = require("./Filtering/ListFiltersAdd");
const ButtonDivider = (_a) => {
    var props = __rest(_a, []);
    props.style = Object.assign({ borderLeft: '1px solid rgba(0, 0, 0, 0.1)', paddingLeft: '0.75em' }, props.style);
    return React.createElement("div", Object.assign({}, props));
};
const CreateButton = (_a) => {
    var { listName, onClick } = _a, props = __rest(_a, ["listName", "onClick"]);
    return (React.createElement(elemental_1.GlyphButton, Object.assign({ block: true, color: "success", "data-e2e-list-create-button": "header", glyph: "plus", onClick: onClick, position: "left", title: `Create ${listName}` }, props),
        React.createElement(elemental_1.ResponsiveText, { visibleSM: "Create", visibleMD: "Create", visibleLG: `Create ${listName}` })));
};
exports.ListHeaderToolbar = (_a) => {
    var { 
    // common
    dispatch, list, 
    // expand
    expandIsActive, expandOnClick, 
    // list
    createIsAvailable, createListName, createOnClick, 
    // search
    searchHandleChange, searchHandleClear, searchHandleKeyup, searchValue, 
    // filters
    filtersActive, filtersAvailable, 
    // columns
    columnsAvailable, columnsActive } = _a, props = __rest(_a, ["dispatch", "list", "expandIsActive", "expandOnClick", "createIsAvailable", "createListName", "createOnClick", "searchHandleChange", "searchHandleClear", "searchHandleKeyup", "searchValue", "filtersActive", "filtersAvailable", "columnsAvailable", "columnsActive"]);
    return (React.createElement(elemental_1.InputGroup, { block: true, style: classes.wrapper },
        React.createElement(elemental_1.InputGroupSection, { grow: true, style: classes.search },
            React.createElement(ListHeaderSearch_1.ListHeaderSearch, { handleChange: searchHandleChange, handleClear: searchHandleClear, handleKeyup: searchHandleKeyup, value: searchValue })),
        React.createElement(elemental_1.InputGroupSection, { grow: true, style: classes.buttons },
            React.createElement(elemental_1.InputGroup, { block: true },
                React.createElement(elemental_1.InputGroupSection, { style: classes.filter },
                    React.createElement(ListFiltersAdd_1.ListFiltersAdd, { dispatch: dispatch, activeFilters: filtersActive, availableFilters: filtersAvailable })),
                React.createElement(elemental_1.InputGroupSection, { style: classes.columns },
                    React.createElement(ListColumnsForm_1.ListColumnsForm, { availableColumns: columnsAvailable, activeColumns: columnsActive, dispatch: dispatch })),
                React.createElement(elemental_1.InputGroupSection, { style: classes.download },
                    React.createElement(ListDownloadForm_1.ListDownloadForm, { activeColumns: columnsActive, dispatch: dispatch, list: list })),
                React.createElement(elemental_1.InputGroupSection, { style: classes.expand },
                    React.createElement(ButtonDivider, null,
                        React.createElement(elemental_1.GlyphButton, { active: expandIsActive, glyph: "mirror", onClick: expandOnClick, title: "Expand table width" }))),
                createIsAvailable && React.createElement(elemental_1.InputGroupSection, { style: classes.create },
                    React.createElement(ButtonDivider, null,
                        React.createElement(CreateButton, { listName: createListName, onClick: createOnClick })))))));
};
const tabletGrowStyles = {
    [`@media (maxWidth: ${theme_1.theme.breakpoint.tabletPortraitMax})`]: {
        flexGrow: 1,
    },
};
const classes = {
    // main wrapper
    wrapper: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.tabletPortraitMax})`]: {
            flexWrap: 'wrap',
        },
    },
    // button wrapper
    buttons: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.tabletPortraitMax})`]: {
            paddingLeft: 0,
        },
    },
    // cols
    expand: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.desktopMax})`]: {
            display: 'none',
        },
    },
    filter: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.tabletPortraitMax})`]: {
            paddingLeft: 0,
            flexGrow: 1,
        },
    },
    columns: tabletGrowStyles,
    create: tabletGrowStyles,
    download: tabletGrowStyles,
    search: {
        [`@media (maxWidth: ${theme_1.theme.breakpoint.tabletPortraitMax})`]: {
            marginBottom: '0.75em',
            minWidth: '100%',
        },
    },
};
