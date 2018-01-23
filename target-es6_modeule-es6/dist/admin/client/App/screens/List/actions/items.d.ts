export declare function loadItems(options?: {}): (dispatch: any, getState: any) => void;
export declare function downloadItems(format: any, columns: any): (dispatch: any, getState: any) => void;
export declare function itemsLoaded(items: any): {
    type: string;
    items: any;
};
/**
 * Dispatched when unsuccessfully trying to load the items, will redispatch
 * loadItems after NETWORK_ERROR_RETRY_DELAY milliseconds until we get items back
 */
export declare function itemLoadingError(): (dispatch: any) => void;
export declare function deleteItems(ids: any): (dispatch: any, getState: any) => void;
