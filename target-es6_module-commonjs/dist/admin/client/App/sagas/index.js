"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const actions = require("../screens/List/constants");
const queryParamsSagas_1 = require("./queryParamsSagas");
const parsers_1 = require("../parsers");
/**
 * Debounce the search loading new items by 500ms
 */
function* debouncedSearch() {
    const searchString = yield effects_1.select((state) => state.active.search);
    if (searchString) {
        yield redux_saga_1.delay(500);
    }
    yield effects_1.call(queryParamsSagas_1.updateParams);
}
function* setActiveColumnsSaga() {
    while (true) {
        const { columns } = yield effects_1.take(actions.SELECT_ACTIVE_COLUMNS);
        const { currentList } = yield effects_1.select((state) => state.lists);
        const newColumns = yield effects_1.call(parsers_1.columnsParser, columns, currentList);
        yield effects_1.put({ type: actions.SET_ACTIVE_COLUMNS, columns: newColumns });
    }
}
exports.setActiveColumnsSaga = setActiveColumnsSaga;
function* setActiveSortSaga() {
    while (true) {
        const { path } = yield effects_1.take(actions.SELECT_ACTIVE_SORT);
        const { currentList } = yield effects_1.select((state) => state.lists);
        const sort = yield effects_1.call(parsers_1.sortParser, path, currentList);
        yield effects_1.put({ type: actions.SET_ACTIVE_SORT, sort });
    }
}
exports.setActiveSortSaga = setActiveSortSaga;
function* setActiveFilterSaga() {
    while (true) {
        const { filter } = yield effects_1.take(actions.SELECT_FILTER);
        const { currentList } = yield effects_1.select((state) => state.lists);
        const activeFilters = yield effects_1.select((state) => state.active.filters);
        const updatedFilter = yield effects_1.call(parsers_1.filterParser, filter, activeFilters, currentList);
        yield effects_1.put({ type: actions.ADD_FILTER, filter: updatedFilter });
    }
}
exports.setActiveFilterSaga = setActiveFilterSaga;
function* rootSaga() {
    yield effects_1.fork(redux_saga_1.takeLatest, actions.SET_ACTIVE_SEARCH, debouncedSearch);
    yield effects_1.fork(redux_saga_1.takeLatest, actions.SET_ACTIVE_LIST, queryParamsSagas_1.evalQueryParams);
    // If one of the other active properties changes, update the query params and load the new items
    yield effects_1.fork(setActiveSortSaga);
    yield effects_1.fork(setActiveColumnsSaga);
    yield effects_1.fork(setActiveFilterSaga);
    yield effects_1.fork(redux_saga_1.takeLatest, [
        actions.QUERY_HAS_CHANGED,
        actions.ADD_FILTER,
        actions.SET_ACTIVE_COLUMNS,
        actions.SET_ACTIVE_SORT,
        actions.SET_CURRENT_PAGE,
        actions.CLEAR_FILTER,
        actions.CLEAR_ALL_FILTERS,
    ], queryParamsSagas_1.updateParams);
}
exports.rootSaga = rootSaga;
