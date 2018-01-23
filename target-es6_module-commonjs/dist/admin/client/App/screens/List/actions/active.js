"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
/**
 * Active actions
 */
function setActiveSearch(searchString) {
    return {
        type: constants_1.SET_ACTIVE_SEARCH,
        searchString,
    };
}
exports.setActiveSearch = setActiveSearch;
function setActiveSort(path) {
    return {
        type: constants_1.SELECT_ACTIVE_SORT,
        path,
    };
}
exports.setActiveSort = setActiveSort;
function setActiveColumns(columns) {
    return {
        type: constants_1.SELECT_ACTIVE_COLUMNS,
        columns,
    };
}
exports.setActiveColumns = setActiveColumns;
function setActiveList(list, id) {
    return {
        type: constants_1.SET_ACTIVE_LIST,
        list,
        id,
    };
}
exports.setActiveList = setActiveList;
/**
 * Filtering actions
 */
function clearFilter(path) {
    return {
        type: constants_1.CLEAR_FILTER,
        path,
    };
}
exports.clearFilter = clearFilter;
function clearAllFilters() {
    return {
        type: constants_1.CLEAR_ALL_FILTERS,
    };
}
exports.clearAllFilters = clearAllFilters;
function setFilter(path, value) {
    return {
        type: constants_1.SELECT_FILTER,
        filter: { path, value },
    };
}
exports.setFilter = setFilter;
function clearCachedQuery() {
    return {
        type: constants_1.CLEAR_CACHED_QUERY,
    };
}
exports.clearCachedQuery = clearCachedQuery;
