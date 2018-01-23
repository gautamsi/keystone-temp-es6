"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const actions_1 = require("../actions");
function setDragBase(item, index) {
    return (dispatch) => {
        dispatch(resetDragPage());
        dispatch(resetDragItems());
        if (item) {
            dispatch(setDragItem(item));
            if (index) {
                dispatch(setDragIndex(index));
            }
        }
    };
}
exports.setDragBase = setDragBase;
function resetDragPage() {
    return {
        type: constants_1.RESET_DRAG_PAGE,
    };
}
exports.resetDragPage = resetDragPage;
function resetDragItems() {
    return {
        type: constants_1.RESET_DRAG_ITEMS,
    };
}
exports.resetDragItems = resetDragItems;
function setDragItem(item) {
    return {
        type: constants_1.SET_DRAG_ITEM,
        item,
    };
}
exports.setDragItem = setDragItem;
function setDragIndex(index) {
    return {
        type: constants_1.SET_DRAG_INDEX,
        index,
    };
}
exports.setDragIndex = setDragIndex;
function setRowAlert(data) {
    return {
        type: constants_1.SET_ROW_ALERT,
        data,
    };
}
exports.setRowAlert = setRowAlert;
function moveItem(prevIndex, newIndex, options) {
    return {
        type: constants_1.DRAG_MOVE_ITEM,
        prevIndex,
        newIndex,
        options,
    };
}
exports.moveItem = moveItem;
function reorderItems(item, prevSortOrder, newSortOrder, goToPage) {
    // // reset drag
    // defaultDrag();
    return (dispatch, getState) => {
        if (goToPage) {
            // TODO FIGURE OUT IF THIS IS A RACE CONDITION
            dispatch(actions_1.setCurrentPage(goToPage));
        }
        const state = getState();
        const list = state.lists.currentList;
        // Send the item, previous sortOrder and the new sortOrder
        // we should get the proper list and new page results in return
        list.reorderItems(item, prevSortOrder, newSortOrder, {
            search: state.active.search,
            filters: state.active.filters,
            sort: state.active.sort,
            columns: state.active.columns,
            page: state.lists.page,
        }, (err, items) => {
            // If err, flash the row alert
            if (err) {
                dispatch(resetItems(item.id));
                // return this.resetItems(this.findItemById[item.id]);
            }
            else {
                dispatch(actions_1.itemsLoaded(items));
                dispatch(setRowAlert({
                    success: item.id,
                    fail: false,
                }));
            }
        });
    };
}
exports.reorderItems = reorderItems;
function resetItems(itemId) {
    return (dispatch, getState) => {
        const state = getState();
        const { page, drag } = state.lists;
        if (page.index !== drag.page) {
            // We are not on the original page so we need to move back to it
            dispatch(actions_1.setCurrentPage(drag.page));
            dispatch(actions_1.loadItems({
                fail: true,
                id: itemId,
            }));
            // reset drag
            // return defaultDrag();
        }
        // Reset the list if dragout or error
        dispatch(setRowAlert({
            success: false,
            fail: itemId,
        }));
        // we use the cached clone since this is the same page
        // the clone contains the proper index numbers which get overwritten on drag
        // _items.results = drag.clonedItems;
        // defaultDrag();
        // this.notifyChange();
    };
}
exports.resetItems = resetItems;
