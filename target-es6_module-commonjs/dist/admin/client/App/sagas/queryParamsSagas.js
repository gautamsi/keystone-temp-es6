"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryParams_1 = require("../../utils/queryParams");
const react_router_redux_1 = require("react-router-redux");
const effects_1 = require("redux-saga/effects");
const blacklist = require("blacklist");
const actions = require("../screens/List/constants");
const actions_1 = require("../screens/List/actions");
const _ = require("lodash");
const parsers_1 = require("../parsers");
function* urlUpdate(query, cache, pathname) {
    const blacklistedField = 'search';
    const attenuatedQuery = blacklist(query, blacklistedField);
    const attenuatedCache = blacklist(cache, blacklistedField);
    if (!_.isEqual(attenuatedQuery, attenuatedCache)) {
        yield effects_1.put(react_router_redux_1.push({
            pathname,
            query,
        }));
    }
    else {
        yield effects_1.put(react_router_redux_1.replace({
            pathname,
            query,
        }));
    }
}
exports.urlUpdate = urlUpdate;
/**
 * Update the query params based on the current state
 */
function* updateParams() {
    // Select all the things
    const activeState = yield effects_1.select((state) => state.active);
    const currentList = yield effects_1.select((state) => state.lists.currentList);
    const location = yield effects_1.select((state) => state.routing.location);
    // const location = yield select((state: any) => state.routing.locationBeforeTransitions);
    const { index } = yield effects_1.select((state) => state.lists.page);
    // Get the data into the right format, set the defaults
    const sort = queryParams_1.createSortQueryParams(activeState.sort.rawInput, currentList.defaultSort);
    const page = queryParams_1.createPageQueryParams(index, 1);
    const columns = queryParams_1.stringifyColumns(activeState.columns, currentList.defaultColumnPaths);
    const search = activeState.search;
    const filters = queryParams_1.parametizeFilters(activeState.filters);
    const newParams = queryParams_1.updateQueryParams({
        page,
        columns,
        sort,
        search,
        filters,
    }, location);
    // TODO: Starting or clearing a search pushes a new history state, but updating
    // the current search replaces it for nicer history navigation support
    yield effects_1.put({ type: actions.REPLACE_CACHED_QUERY, cachedQuery: newParams });
    yield* urlUpdate(newParams, activeState.cachedQuery, location.pathname);
    yield effects_1.put(actions_1.loadItems());
}
exports.updateParams = updateParams;
function* evalQueryParams() {
    const { pathname, query } = yield effects_1.select((state) => state.routing.location);
    const { cachedQuery } = yield effects_1.select((state) => state.active);
    const { currentList } = yield effects_1.select((state) => state.lists);
    if (pathname !== `/keystone/${currentList.id}`)
        return;
    if (_.isEqual(query, cachedQuery)) {
        yield effects_1.put({ type: actions.QUERY_HAS_NOT_CHANGED });
        yield effects_1.put(actions_1.loadItems());
    }
    else {
        const parsedQuery = yield effects_1.call(parseQueryParams, query || {}, currentList);
        yield effects_1.put({ type: actions.QUERY_HAS_CHANGED, parsedQuery });
    }
}
exports.evalQueryParams = evalQueryParams;
function parseQueryParams(query, currentList) {
    const columns = parsers_1.columnsParser(query.columns, currentList);
    const sort = parsers_1.sortParser(query.sort, currentList);
    const filters = parsers_1.filtersParser(query.filters, currentList);
    const currentPage = query.page || 1;
    const search = query.search || '';
    return {
        columns,
        sort,
        filters,
        currentPage,
        search,
    };
}
exports.parseQueryParams = parseQueryParams;
