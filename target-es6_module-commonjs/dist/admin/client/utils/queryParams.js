"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blacklist = require("blacklist");
const _ = require("lodash");
function checkForQueryChange(nextProps, thisProps) {
    const { query } = nextProps.location;
    const { cachedQuery } = nextProps.active;
    const parsedQuery = Object.assign({}, query, { page: parseInt((query || {}).page) });
    if (!parsedQuery.page)
        delete parsedQuery.page;
    const attenuatedQuery = blacklist(parsedQuery, 'search');
    const attenuatedCache = blacklist(cachedQuery, 'search');
    if (nextProps.location.pathname !== thisProps.location.pathname)
        return true;
    if (!_.isEqual(attenuatedQuery, attenuatedCache))
        return true;
    return false;
}
exports.checkForQueryChange = checkForQueryChange;
function normaliseValue(value, benchmark) {
    if (value === benchmark)
        return void 0;
    return value;
}
exports.normaliseValue = normaliseValue;
function createSortQueryParams(rawInput, defaultSort) {
    return normaliseValue(rawInput, defaultSort);
}
exports.createSortQueryParams = createSortQueryParams;
function createPageQueryParams(page, defaultValue) {
    return normaliseValue(page, defaultValue);
}
exports.createPageQueryParams = createPageQueryParams;
/**
 * Updates the query parameters with the ones passed as the first argument
 *
 * @param  {Object} params         The new parameters to be added
 * @param  {Object} location       The current location object
 */
function updateQueryParams(params, location) {
    if (!location)
        return;
    const newParams = Object.assign({}, location.query);
    // Stringify nested objects inside the parameters
    Object.keys(params).forEach(i => {
        if (params[i]) {
            newParams[i] = params[i];
            if (typeof newParams[i] === 'object') {
                newParams[i] = JSON.stringify(newParams[i]);
            }
        }
        else {
            delete newParams[i];
        }
    });
    return newParams;
}
exports.updateQueryParams = updateQueryParams;
/**
 * Stringify the columns array from the state
 *
 * @param  {Array}  columns            The columns from the active state
 * @param  {String} defaultColumnPaths The default column paths of the current list
 *
 * @return {String}                    The column array, stringified
 */
function stringifyColumns(columns, defaultColumnPaths) {
    if (!columns) {
        return;
    }
    // Turns [{ path: 'someColumn' }, { path: 'someOtherColumn' }]
    // into ['someColumn', 'someOtherColumn']
    let columnString = columns.map((column) => column.path);
    // Turns that array into 'someColumn,someOtherColumn'
    if (Array.isArray(columnString))
        columnString = columnString.join(',');
    // If that is the same as the default columns, don't set the query param
    if (columnString === defaultColumnPaths)
        columnString = undefined;
    return columnString;
}
exports.stringifyColumns = stringifyColumns;
/**
 * Flattens filters from state into the minimum needed object to be used as a url
 * param
 *
 * @param  {Object} filterArray         The array of filters from state
 */
function parametizeFilters(filterArray) {
    if (!filterArray || filterArray.length === 0) {
        return;
    }
    return filterArray.map((filter) => {
        return Object.assign({
            path: filter.field.path,
        }, filter.value);
    });
}
exports.parametizeFilters = parametizeFilters;