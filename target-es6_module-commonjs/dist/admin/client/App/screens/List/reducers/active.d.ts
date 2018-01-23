/**
 * Manage the active state
 */
export declare function activeReducer(state: {
    columns: any[];
    filters: any[];
    search: string;
    sort: {
        input: string;
        isDefaultSort: boolean;
        paths: any[];
        rawInput: string;
    };
    cachedQuery: {};
}, action: any): {
    columns: any[];
    filters: any[];
    search: string;
    sort: {
        input: string;
        isDefaultSort: boolean;
        paths: any[];
        rawInput: string;
    };
    cachedQuery: {};
};
