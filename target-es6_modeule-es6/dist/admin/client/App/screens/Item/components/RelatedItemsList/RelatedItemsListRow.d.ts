/// <reference types="react" />
/// <reference types="react-dnd" />
import * as React from 'react';
export interface Props {
    columns: Array<any>;
    dispatch: any;
    dragNewSortOrder?: number;
    index?: number;
    item: any;
    refList: any;
    relatedItemId: string;
    relationship: any;
    isDragging?: boolean;
    connectDragSource?: any;
    connectDropTarget?: any;
    connectDragPreview?: any;
}
export declare class RelatedItemsListRow extends React.Component<Props> {
    render(): any;
    static propTypes: {};
}
export declare const SortableRelatedItemsListRow: __ReactDnd.DndComponentClass<any>;
