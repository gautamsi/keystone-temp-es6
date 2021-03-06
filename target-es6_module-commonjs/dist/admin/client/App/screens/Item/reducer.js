"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Item reducer, handles the item data and loading
 */
const constants_1 = require("./constants");
const initialState = {
    data: null,
    id: null,
    loading: false,
    ready: false,
    error: null,
    relationshipData: {},
    drag: {
        clonedItems: false,
        newSortOrder: null,
        relationshipPath: '',
    },
};
function itemReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SELECT_ITEM:
            return Object.assign({}, state, {
                ready: false,
                id: action.id,
                data: null,
            });
        case constants_1.LOAD_DATA:
            return Object.assign({}, state, {
                loading: true,
            });
        case constants_1.DATA_LOADING_SUCCESS:
            Keystone.item = action.data; // Fix keystone filter
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                ready: true,
                error: null,
            });
        case constants_1.DATA_LOADING_ERROR:
            return Object.assign({}, state, {
                data: null,
                loading: false,
                ready: true,
                error: action.error,
            });
        case constants_1.DRAG_MOVE_ITEM:
            const currentItems = state.relationshipData[action.relationshipPath].results;
            // Cache a copy of the current items to reset the items when dismissing a drag and drop if a cached copy doesn't already exist
            const clonedItems = state.drag.clonedItems || currentItems;
            const item = currentItems[action.prevIndex];
            // Remove item at prevIndex from array and save that array in
            // itemsWithoutItem
            const itemsWithoutItem = currentItems
                .slice(0, action.prevIndex)
                .concat(currentItems.slice(action.prevIndex + 1, currentItems.length));
            // Add item back in at new index
            itemsWithoutItem.splice(action.newIndex, 0, item);
            const newRelationshipData = Object.assign({}, state.relationshipData[action.relationshipPath], {
                results: itemsWithoutItem,
            });
            return Object.assign({}, state, {
                drag: {
                    newSortOrder: action.newSortOrder,
                    clonedItems: clonedItems,
                    relationshipPath: action.relationshipPath,
                },
                relationshipData: Object.assign({}, state.relationshipData, { [action.relationshipPath]: newRelationshipData }),
            });
        case constants_1.DRAG_RESET_ITEMS:
            const originalRelationshipData = Object.assign({}, state.relationshipData[state.drag.relationshipPath], {
                results: state.drag.clonedItems,
            });
            return Object.assign({}, state, {
                drag: {
                    newSortOrder: null,
                    clonedItems: false,
                    relationshipPath: false,
                },
                relationshipData: Object.assign({}, state.relationshipData, { [state.drag.relationshipPath]: originalRelationshipData }),
            });
        case constants_1.LOAD_RELATIONSHIP_DATA:
            return Object.assign({}, state, {
                // Reset drag and drop when relationship data is loaded
                drag: {
                    newSortOrder: null,
                    clonedItems: false,
                    relationshipPath: false,
                },
                relationshipData: Object.assign({}, state.relationshipData, { [action.relationshipPath]: action.data }),
            });
        default:
            return state;
    }
}
exports.itemReducer = itemReducer;
