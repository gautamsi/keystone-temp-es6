/**
 * Select an item
 *
 * @param  {String} itemId The item ID
 */
export declare function selectItem(itemId: any): {
    type: string;
    id: any;
};
/**
 * Load the item data of the current item
 */
export declare function loadItemData(): (dispatch: any, getState: any) => void;
export declare function loadRelationshipItemData({columns, refList, relationship, relatedItemId}: {
    columns: any;
    refList: any;
    relationship: any;
    relatedItemId: any;
}): (dispatch: any, getState: any) => void;
/**
 * Called when data of the current item is loaded
 *
 * @param  {Object} data The item data
 */
export declare function dataLoaded(data: any): {
    type: string;
    loadingRef: any;
    data: any;
};
export declare function relationshipDataLoaded(path: any, data: any): {
    type: string;
    relationshipPath: any;
    data: any;
};
/**
 * Called when there was an error during the loading of the current item data,
 * will retry loading the data ever NETWORK_ERROR_RETRY_DELAY milliseconds
 *
 * @param  {Object} error The error
 */
export declare function dataLoadingError(err: any): {
    type: string;
    loadingRef: any;
    error: any;
};
/**
 * Deletes an item and optionally redirects to the current list URL
 *
 * @param  {String} id     The ID of the item we want to delete
 * @param  {Object} router A react-router router object. If this is passed, we
 *                         redirect to Keystone.adminPath/currentList.path!
 */
export declare function deleteItem(id: any, router?: any): (dispatch: any, getState: any) => void;
export declare function reorderItems({columns, refList, relationship, relatedItemId, item, prevSortOrder, newSortOrder}: {
    columns: any;
    refList: any;
    relationship: any;
    relatedItemId: any;
    item: any;
    prevSortOrder: any;
    newSortOrder: any;
}): (dispatch: any, getState: any) => void;
export declare function moveItem({prevIndex, newIndex, relationshipPath, newSortOrder}: {
    prevIndex: any;
    newIndex: any;
    relationshipPath: any;
    newSortOrder: any;
}): {
    type: string;
    prevIndex: any;
    newIndex: any;
    relationshipPath: any;
    newSortOrder: any;
};
export declare function resetItems(): {
    type: string;
};
