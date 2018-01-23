/// <reference types="react" />
import * as React from 'react';
export interface Props {
    checkedItems: any;
    columns: Array<any>;
    deleteTableItem: any;
    handleSortSelect: any;
    items: any;
    list: any;
    manageMode: boolean;
    rowAlert: any;
    activeSort: any;
    checkTableItem?: any;
    currentPage?: any;
    pageSize?: number;
    drag?: any;
    dispatch?: any;
}
export declare class ItemsTable extends React.Component<Props> {
    renderCols(): JSX.Element;
    renderHeaders(): JSX.Element;
    render(): JSX.Element;
}
