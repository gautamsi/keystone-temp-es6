"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const actions_1 = require("../List/actions");
/**
 * Select an item
 *
 * @param  {String} itemId The item ID
 */
function selectItem(itemId) {
    return {
        type: constants_1.SELECT_ITEM,
        id: itemId,
    };
}
exports.selectItem = selectItem;
/**
 * Load the item data of the current item
 */
function loadItemData() {
    return (dispatch, getState) => {
        // Hold on to the id of the item we currently want to load.
        // Dispatch this reference to our redux store to hold on to as a 'loadingRef'.
        const currentItemID = getState().item.id;
        dispatch({
            type: constants_1.LOAD_DATA,
        });
        const state = getState();
        const list = state.lists.currentList;
        // const itemID = state.item.id;
        // Load a specific item with the utils/List.js helper
        list.loadItem(state.item.id, { drilldown: true }, (err, itemData) => {
            // Once this async request has fired this callback, check that
            // the item id referenced by thisLoadRef is the same id
            // referenced by loadingRef in the redux store.
            // If it is, then this is the latest request, and it is safe to resolve it normally.
            // If it is not the same id however,
            // this means that this request is NOT the latest fired request,
            // and so we'll bail out of it early.
            if (getState().item.id !== currentItemID)
                return;
            if (err || !itemData) {
                dispatch(dataLoadingError(err));
            }
            else {
                dispatch(dataLoaded(itemData));
            }
        });
    };
}
exports.loadItemData = loadItemData;
function loadRelationshipItemData({ columns, refList, relationship, relatedItemId }) {
    return (dispatch, getState) => {
        refList.loadItems({
            columns: columns,
            filters: [{
                    field: refList.fields[relationship.refPath],
                    value: { value: relatedItemId },
                }],
        }, (err, items) => {
            // // TODO: indicate pagination & link to main list view
            // this.setState({ items });
            dispatch(relationshipDataLoaded(relationship.path, items));
        });
    };
}
exports.loadRelationshipItemData = loadRelationshipItemData;
/**
 * Called when data of the current item is loaded
 *
 * @param  {Object} data The item data
 */
function dataLoaded(data) {
    return {
        type: constants_1.DATA_LOADING_SUCCESS,
        loadingRef: null,
        data,
    };
}
exports.dataLoaded = dataLoaded;
function relationshipDataLoaded(path, data) {
    return {
        type: constants_1.LOAD_RELATIONSHIP_DATA,
        relationshipPath: path,
        data,
    };
}
exports.relationshipDataLoaded = relationshipDataLoaded;
/**
 * Called when there was an error during the loading of the current item data,
 * will retry loading the data ever NETWORK_ERROR_RETRY_DELAY milliseconds
 *
 * @param  {Object} error The error
 */
function dataLoadingError(err) {
    return {
        type: constants_1.DATA_LOADING_ERROR,
        loadingRef: null,
        error: err,
    };
}
exports.dataLoadingError = dataLoadingError;
/**
 * Deletes an item and optionally redirects to the current list URL
 *
 * @param  {String} id     The ID of the item we want to delete
 * @param  {Object} router A react-router router object. If this is passed, we
 *                         redirect to Keystone.adminPath/currentList.path!
 */
function deleteItem(id, router) {
    return (dispatch, getState) => {
        const state = getState();
        const list = state.lists.currentList;
        list.deleteItem(id, (err) => {
            // If a router is passed, redirect to the current list path,
            // otherwise stay where we are
            if (router) {
                let redirectUrl = `${Keystone.adminPath}/${list.path}`;
                if (state.lists.page.index && state.lists.page.index > 1) {
                    redirectUrl = `${redirectUrl}?page=${state.lists.page.index}`;
                }
                router.push(redirectUrl);
            }
            // TODO Proper error handling
            if (err) {
                alert('Error deleting item, please try again!');
            }
            else {
                dispatch(actions_1.loadItems());
            }
        });
    };
}
exports.deleteItem = deleteItem;
function reorderItems({ columns, refList, relationship, relatedItemId, item, prevSortOrder, newSortOrder }) {
    return (dispatch, getState) => {
        // Send the item, previous sortOrder and the new sortOrder
        // we should get the proper list and new page results in return
        refList.reorderItems(item, prevSortOrder, newSortOrder, {
            columns: columns,
            filters: [{
                    field: refList.fields[relationship.refPath],
                    value: { value: relatedItemId },
                }],
        }, (err, items) => {
            dispatch(relationshipDataLoaded(relationship.path, items));
            // If err, flash the row alert
            // if (err) {
            // 	dispatch(resetItems(item.id));
            // 	// return this.resetItems(this.findItemById[item.id]);
            // } else {
            // 	dispatch(itemsLoaded(items));
            // 	dispatch(setRowAlert({
            // 		success: item.id,
            // 		fail: false,
            // 	}));
            // }
        });
    };
}
exports.reorderItems = reorderItems;
function moveItem({ prevIndex, newIndex, relationshipPath, newSortOrder }) {
    return {
        type: constants_1.DRAG_MOVE_ITEM,
        prevIndex,
        newIndex,
        relationshipPath,
        newSortOrder,
    };
}
exports.moveItem = moveItem;
function resetItems() {
    return {
        type: constants_1.DRAG_RESET_ITEMS,
    };
}
exports.resetItems = resetItems;
