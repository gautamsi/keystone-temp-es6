/// <reference types="react" />
/// <reference types="react-dnd" />
import * as React from 'react';
export interface Props {
    columns?: Array<any>;
    id?: any;
    index?: number;
    items?: any;
    list?: any;
    isDragging?: boolean;
    connectDragSource?: any;
    connectDropTarget?: any;
    connectDragPreview?: any;
    checkedItems?: any;
    manageMode?: any;
    rowAlert?: any;
    deleteTableItem?: any;
    checkTableItem?: any;
    item?: any;
}
export declare class TableRow extends React.Component<Props> {
    renderRow(item: any): any;
    render(): any;
}
export declare const SortableTableRow: __ReactDnd.DndComponentClass<any>;
