/// <reference types="react-dnd" />
export interface Props {
    columns: Array<any>;
    dispatch: any;
    dragNewSortOrder?: number;
    items: any;
    list: any;
    refList: any;
    relatedItemId: string;
    relationship: any;
}
export declare const DragDrop: __ReactDnd.ContextComponentClass<Props>;
