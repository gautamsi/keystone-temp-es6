/**
 * Manage all lists
 */
export declare function listsReducer(state: {
    loadingRef: any;
    loadCounter: number;
    currentList: any;
    loading: boolean;
    ready: boolean;
    error: any;
    data: {};
    items: {
        results: any[];
        count: any;
    };
    page: {
        size: any;
        index: any;
    };
    rowAlert: {
        success: boolean;
        fail: boolean;
    };
    drag: {
        page: number;
        item: boolean;
        clonedItems: boolean;
        index: boolean;
    };
}, action: any): {
    loadingRef: any;
    loadCounter: number;
    currentList: any;
    loading: boolean;
    ready: boolean;
    error: any;
    data: {};
    items: {
        results: any[];
        count: any;
    };
    page: {
        size: any;
        index: any;
    };
    rowAlert: {
        success: boolean;
        fail: boolean;
    };
    drag: {
        page: number;
        item: boolean;
        clonedItems: boolean;
        index: boolean;
    };
};
