/**
 * Active actions
 */
export declare function setActiveSearch(searchString: any): {
    type: string;
    searchString: any;
};
export declare function setActiveSort(path: any): {
    type: string;
    path: any;
};
export declare function setActiveColumns(columns: any): {
    type: string;
    columns: any;
};
export declare function setActiveList(list: any, id: any): {
    type: string;
    list: any;
    id: any;
};
/**
 * Filtering actions
 */
export declare function clearFilter(path: any): {
    type: string;
    path: any;
};
export declare function clearAllFilters(): {
    type: string;
};
export declare function setFilter(path: any, value: any): {
    type: string;
    filter: {
        path: any;
        value: any;
    };
};
export declare function clearCachedQuery(): {
    type: string;
};
