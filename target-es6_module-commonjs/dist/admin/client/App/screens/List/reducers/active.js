"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const constants_1 = require("../constants");
const initialState = {
    columns: [],
    filters: [],
    search: '',
    sort: {
        input: '',
        isDefaultSort: false,
        paths: [],
        rawInput: '',
    },
    cachedQuery: {},
};
/**
 * Manage the active state
 */
function activeReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SET_ACTIVE_LIST:
            return Object.assign({}, state, {
                id: action.id,
                columns: action.list.expandColumns(action.list.defaultColumns),
                filters: [],
                search: '',
                sort: action.list.expandSort(action.list.defaultSort),
            });
        case constants_1.SET_ACTIVE_SEARCH:
            return Object.assign({}, state, {
                search: action.searchString,
            });
        case constants_1.SET_ACTIVE_SORT:
            return Object.assign({}, state, {
                sort: action.sort,
            });
        case constants_1.SET_ACTIVE_COLUMNS:
            return Object.assign({}, state, {
                columns: action.columns,
            });
        case constants_1.ADD_FILTER:
            return Object.assign({}, state, {
                // Override existing filter with field path,
                // otherwise add to filters array
                filters: _.unionWith([action.filter], state.filters, (stateFilter, actionFilter) => {
                    return stateFilter.field.path === actionFilter.field.path;
                }),
            });
        case constants_1.SET_FILTERS:
            return Object.assign({}, state, {
                filters: action.filters,
            });
        case constants_1.CLEAR_FILTER:
            const newFilters = _.filter(state.filters, (filter) => {
                return filter.field.path !== action.path;
            });
            return Object.assign({}, state, {
                filters: newFilters,
            });
        case constants_1.CLEAR_ALL_FILTERS:
            return Object.assign({}, state, {
                filters: [],
            });
        case constants_1.QUERY_HAS_CHANGED:
            const { search, sort, filters, columns, } = action.parsedQuery;
            return Object.assign({}, state, {
                search,
                sort: sort || initialState.sort,
                filters: filters || initialState.filters,
                columns: columns || initialState.columns,
            });
        case constants_1.REPLACE_CACHED_QUERY:
            return Object.assign({}, state, {
                cachedQuery: action.cachedQuery,
            });
        case constants_1.CLEAR_CACHED_QUERY:
            return Object.assign({}, state, {
                cachedQuery: {},
            });
        default:
            return state;
    }
}
exports.activeReducer = activeReducer;
