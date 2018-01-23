/**
 * Load the counts of all lists
 */
export declare function loadCounts(): (dispatch: any) => void;
/**
 * Dispatched when the counts were loaded
 *
 * @param  {Object} counts The counts object as returned by the API
 */
export declare function countsLoaded(counts?: any): {
    type: string;
    counts: any;
};
/**
 * Dispatched when unsuccessfully trying to load the counts, will redispatch
 * loadCounts after NETWORK_ERROR_RETRY_DELAY until we get counts back
 *
 * @param  {object} error The error
 */
export declare function countsLoadingError(error: any): (dispatch: any, getState: any) => void;
