/// <reference types="react" />
import * as React from 'react';
export interface Props {
    dispatch: any;
    dragNewSortOrder?: number;
    items?: any;
    list: any;
    refList: any;
    relatedItemId: string;
    relationship: any;
}
export declare class RelatedItemsList extends React.Component<Props, any> {
    __isMounted: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    isSortable(): boolean;
    getColumns(): any;
    loadItems(): void;
    renderItems(): JSX.Element;
    renderTableCols(): JSX.Element;
    renderTableHeaders(): JSX.Element;
    render(): JSX.Element;
}
