"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../../../utils/List");
const constants_1 = require("../constants");
const constants_2 = require("../../Item/constants");
const initialState = {
    loadingRef: null,
    loadCounter: 0,
    currentList: null,
    loading: false,
    ready: false,
    error: null,
    data: {},
    items: {
        results: [],
        count: null,
    },
    page: {
        size: null,
        index: undefined,
    },
    rowAlert: {
        success: false,
        fail: false,
    },
    drag: {
        page: 1,
        item: false,
        clonedItems: false,
        index: false,
    },
};
// Rekey the lists in the state with their paths for easier matching with the
// URL parameters
const initialLists = Keystone.lists;
for (const name in initialLists) {
    if ({}.hasOwnProperty.call(initialLists, name)) {
        const currentList = initialLists[name];
        initialState.data[currentList.path] = new List_1.List(currentList);
        initialState.data[currentList.path].items = {
            results: [],
            count: null,
        };
    }
}
/**
 * Manage all lists
 */
function listsReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SELECT_LIST:
            const list = state.data[action.id];
            list.id = action.id;
            let items = {
                results: [],
                count: null,
            };
            // If we have cached items, instead of resetting state.items put the
            // cached items in the state
            if (list.items.count !== null) {
                items = list.items;
            }
            return Object.assign({}, state, {
                currentList: list,
                ready: false,
                items: items,
                page: Object.assign({}, state.page, { index: 1, size: list.perPage }),
            });
        case constants_1.LOAD_ITEMS:
            let loading = true;
            let ready = state.ready;
            // If we have cached items ready, don't show a loading indicator
            // while we fetch the new items in the background
            if (state.items.count !== null && loading === false) {
                loading = false;
                ready = true;
            }
            return Object.assign({}, state, {
                loading,
                ready,
                loadCounter: action.loadCounter,
            });
        case constants_1.ITEMS_LOADED:
            // Cache the items in state.data so we can show the already existing
            // items on the next round trip while fetching the new items in the
            // background
            const cachedList = state.data[state.currentList.id];
            cachedList.items = action.items;
            return Object.assign({}, state, {
                loading: false,
                ready: true,
                error: null,
                items: action.items,
                data: Object.assign({}, state.data, { [state.currentList.id]: cachedList }),
                loadCounter: 0,
            });
        case constants_1.ITEM_LOADING_ERROR:
            return Object.assign({}, state, {
                loading: true,
                ready: true,
                error: action.err,
                loadCounter: 0,
            });
        case constants_2.DELETE_ITEM:
            const newItems = {
                results: state.items.results.filter((el) => (el.id !== action.id)),
                count: state.items.count - 1,
            };
            const newCachedList = state.data[state.currentList.id];
            newCachedList.items = newItems;
            return Object.assign({}, state, {
                items: newItems,
                data: Object.assign({}, state.data, { [state.currentList.id]: newCachedList }),
            });
        case constants_1.SET_CURRENT_PAGE:
            console.log(action.index);
            return Object.assign({}, state, {
                loading: true,
                page: Object.assign({}, state.page, { index: action.index }),
            });
        case constants_1.SET_ROW_ALERT:
            if (action.data.reset === true) {
                return Object.assign({}, state, {
                    rowAlert: {
                        success: false,
                        fail: false,
                    },
                });
            }
            return Object.assign({}, state, {
                rowAlert: Object.assign({}, state.rowAlert, action.data),
            });
        case constants_1.RESET_DRAG_PAGE:
            return Object.assign({}, state, {
                drag: Object.assign({}, state.drag, { page: state.page.index }),
            });
        case constants_1.RESET_DRAG_ITEMS:
            return Object.assign({}, state, {
                drag: Object.assign({}, state.drag, { clonedItems: state.items }),
            });
        case constants_1.SET_DRAG_ITEM:
            return Object.assign({}, state, {
                drag: Object.assign({}, state.drag, { item: action.item }),
            });
        case constants_1.SET_DRAG_INDEX:
            return Object.assign({}, state, {
                drag: Object.assign({}, state.drag, { index: action.index }),
            });
        case constants_1.QUERY_HAS_CHANGED:
            const index = parseInt(action.parsedQuery.currentPage) || 1;
            return Object.assign({}, state, {
                loading: true,
                page: Object.assign({}, state.page, { index }),
            });
        case constants_1.DRAG_MOVE_ITEM:
            // TODO: option to use manageMode for sortOrder
            const currentItems = state.items.results;
            const item = currentItems[action.prevIndex];
            // Remove item at prevIndex from array and save that array in
            // itemsWithoutItem
            const itemsWithoutItem = currentItems
                .slice(0, action.prevIndex)
                .concat(currentItems.slice(action.prevIndex + 1, currentItems.length));
            // Add item back in at new index
            itemsWithoutItem.splice(action.newIndex, 0, item);
            return Object.assign({}, state, {
                items: Object.assign({}, state.items, { results: itemsWithoutItem }),
            });
        default:
            return state;
    }
}
exports.listsReducer = listsReducer;