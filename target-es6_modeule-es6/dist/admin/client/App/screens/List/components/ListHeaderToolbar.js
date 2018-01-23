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
import { GlyphButton, InputGroup as Group, InputGroupSection as Section, ResponsiveText, } from '../../../elemental';
import { theme } from '../../../../theme';
import { ListColumnsForm } from './ListColumnsForm';
import { ListDownloadForm } from './ListDownloadForm';
import { ListHeaderSearch } from './ListHeaderSearch';
import { ListFiltersAdd } from './Filtering/ListFiltersAdd';
const ButtonDivider = (_a) => {
    var props = __rest(_a, []);
    props.style = Object.assign({ borderLeft: '1px solid rgba(0, 0, 0, 0.1)', paddingLeft: '0.75em' }, props.style);
    return React.createElement("div", Object.assign({}, props));
};
const CreateButton = (_a) => {
    var { listName, onClick } = _a, props = __rest(_a, ["listName", "onClick"]);
    return (React.createElement(GlyphButton, Object.assign({ block: true, color: "success", "data-e2e-list-create-button": "header", glyph: "plus", onClick: onClick, position: "left", title: `Create ${listName}` }, props),
        React.createElement(ResponsiveText, { visibleSM: "Create", visibleMD: "Create", visibleLG: `Create ${listName}` })));
};
export const ListHeaderToolbar = (_a) => {
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
    return (React.createElement(Group, { block: true, style: classes.wrapper },
        React.createElement(Section, { grow: true, style: classes.search },
            React.createElement(ListHeaderSearch, { handleChange: searchHandleChange, handleClear: searchHandleClear, handleKeyup: searchHandleKeyup, value: searchValue })),
        React.createElement(Section, { grow: true, style: classes.buttons },
            React.createElement(Group, { block: true },
                React.createElement(Section, { style: classes.filter },
                    React.createElement(ListFiltersAdd, { dispatch: dispatch, activeFilters: filtersActive, availableFilters: filtersAvailable })),
                React.createElement(Section, { style: classes.columns },
                    React.createElement(ListColumnsForm, { availableColumns: columnsAvailable, activeColumns: columnsActive, dispatch: dispatch })),
                React.createElement(Section, { style: classes.download },
                    React.createElement(ListDownloadForm, { activeColumns: columnsActive, dispatch: dispatch, list: list })),
                React.createElement(Section, { style: classes.expand },
                    React.createElement(ButtonDivider, null,
                        React.createElement(GlyphButton, { active: expandIsActive, glyph: "mirror", onClick: expandOnClick, title: "Expand table width" }))),
                createIsAvailable && React.createElement(Section, { style: classes.create },
                    React.createElement(ButtonDivider, null,
                        React.createElement(CreateButton, { listName: createListName, onClick: createOnClick })))))));
};
const tabletGrowStyles = {
    [`@media (maxWidth: ${theme.breakpoint.tabletPortraitMax})`]: {
        flexGrow: 1,
    },
};
const classes = {
    // main wrapper
    wrapper: {
        [`@media (maxWidth: ${theme.breakpoint.tabletPortraitMax})`]: {
            flexWrap: 'wrap',
        },
    },
    // button wrapper
    buttons: {
        [`@media (maxWidth: ${theme.breakpoint.tabletPortraitMax})`]: {
            paddingLeft: 0,
        },
    },
    // cols
    expand: {
        [`@media (maxWidth: ${theme.breakpoint.desktopMax})`]: {
            display: 'none',
        },
    },
    filter: {
        [`@media (maxWidth: ${theme.breakpoint.tabletPortraitMax})`]: {
            paddingLeft: 0,
            flexGrow: 1,
        },
    },
    columns: tabletGrowStyles,
    create: tabletGrowStyles,
    download: tabletGrowStyles,
    search: {
        [`@media (maxWidth: ${theme.breakpoint.tabletPortraitMax})`]: {
            marginBottom: '0.75em',
            minWidth: '100%',
        },
    },
};
