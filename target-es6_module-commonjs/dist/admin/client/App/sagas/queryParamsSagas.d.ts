export declare function urlUpdate(query: any, cache: any, pathname: any): any;
/**
 * Update the query params based on the current state
 */
export declare function updateParams(): IterableIterator<any>;
export declare function evalQueryParams(): any;
export declare function parseQueryParams(query: any, currentList: any): {
    columns: any;
    sort: any;
    filters: any;
    currentPage: any;
    search: any;
};
