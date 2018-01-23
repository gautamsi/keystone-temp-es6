export declare function setDragBase(item: any, index: any): (dispatch: any) => void;
export declare function resetDragPage(): {
    type: string;
};
export declare function resetDragItems(): {
    type: string;
};
export declare function setDragItem(item: any): {
    type: string;
    item: any;
};
export declare function setDragIndex(index: any): {
    type: string;
    index: any;
};
export declare function setRowAlert(data: any): {
    type: string;
    data: any;
};
export declare function moveItem(prevIndex: any, newIndex: any, options: any): {
    type: string;
    prevIndex: any;
    newIndex: any;
    options: any;
};
export declare function reorderItems(item: any, prevSortOrder: any, newSortOrder: any, goToPage: any): (dispatch: any, getState: any) => void;
export declare function resetItems(itemId: any): (dispatch: any, getState: any) => void;
