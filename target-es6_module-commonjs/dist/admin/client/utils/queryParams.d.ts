export declare function checkForQueryChange(nextProps: any, thisProps: any): boolean;
export declare function normaliseValue(value: any, benchmark: any): any;
export declare function createSortQueryParams(rawInput: any, defaultSort: any): any;
export declare function createPageQueryParams(page: any, defaultValue: any): any;
/**
 * Updates the query parameters with the ones passed as the first argument
 *
 * @param  {Object} params         The new parameters to be added
 * @param  {Object} location       The current location object
 */
export declare function updateQueryParams(params: any, location: any): any;
/**
 * Stringify the columns array from the state
 *
 * @param  {Array}  columns            The columns from the active state
 * @param  {String} defaultColumnPaths The default column paths of the current list
 *
 * @return {String}                    The column array, stringified
 */
export declare function stringifyColumns(columns: any, defaultColumnPaths: any): any;
/**
 * Flattens filters from state into the minimum needed object to be used as a url
 * param
 *
 * @param  {Object} filterArray         The array of filters from state
 */
export declare function parametizeFilters(filterArray: any): any;
