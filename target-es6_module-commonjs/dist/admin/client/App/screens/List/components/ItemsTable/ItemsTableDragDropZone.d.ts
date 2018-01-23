/// <reference types="react" />
/**
 * THIS IS ORPHANED AND ISN'T RENDERED AT THE MOMENT
 * THIS WAS DONE TO FINISH THE REDUX INTEGRATION, WILL REWRITE SOON
 * - @mxstbr
 */
import * as React from 'react';
export interface Props {
    columns?: Array<any>;
    connectDropTarget?: any;
    items?: any;
    list?: any;
    currentPage?: any;
    pageSize?: number;
    drag?: any;
    dispatch?: any;
}
/**
 * class ItemsTableDragDropZone
 */
export declare class DropZone extends React.Component<Props> {
    static displayName: string;
    renderPageDrops(): JSX.Element;
    render(): JSX.Element;
}
