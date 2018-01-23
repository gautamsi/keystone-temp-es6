"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const active_1 = require("./active");
/**
 * Select a list, and set it as the active list. Called whenever the main
 * List component mounts or the list changes.
 *
 * @param  {String} id The list ID, passed via this.props.match.params.listId
 */
function selectList(id) {
    return (dispatch, getState) => {
        dispatch({
            type: constants_1.SELECT_LIST,
            id,
        });
        dispatch(active_1.setActiveList(getState().lists.data[id], id));
    };
}
exports.selectList = selectList;
function loadInitialItems() {
    return {
        type: constants_1.INITIAL_LIST_LOAD,
    };
}
exports.loadInitialItems = loadInitialItems;
/**
 * Set the current page
 *
 * @param {Number} index The page number we want to be on
 */
function setCurrentPage(index) {
    return {
        type: constants_1.SET_CURRENT_PAGE,
        index: parseInt(index),
    };
}
exports.setCurrentPage = setCurrentPage;
// Export all actions from here again for easier usability, that they're split up
// should be an implementation detail of List
const active_2 = require("./active");
exports.setFilter = active_2.setFilter;
exports.clearFilter = active_2.clearFilter;
exports.clearAllFilters = active_2.clearAllFilters;
exports.setActiveSearch = 
// setActiveFilters,
active_2.setActiveSearch;
exports.setActiveColumns = active_2.setActiveColumns;
exports.clearCachedQuery = active_2.clearCachedQuery;
exports.setActiveSort = active_2.setActiveSort;
const items_1 = require("./items");
exports.loadItems = items_1.loadItems;
exports.itemsLoaded = items_1.itemsLoaded;
exports.itemLoadingError = items_1.itemLoadingError;
exports.deleteItems = items_1.deleteItems;
exports.downloadItems = items_1.downloadItems;
const dragdrop_1 = require("./dragdrop");
exports.setDragBase = dragdrop_1.setDragBase;
exports.resetItems = dragdrop_1.resetItems;
exports.reorderItems = dragdrop_1.reorderItems;
exports.setRowAlert = dragdrop_1.setRowAlert;
exports.moveItem = dragdrop_1.moveItem;
