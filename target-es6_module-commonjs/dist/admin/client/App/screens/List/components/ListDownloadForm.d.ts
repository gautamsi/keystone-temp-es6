/// <reference types="react" />
import * as React from 'react';
export interface Props {
    activeColumns?: Array<any>;
    dispatch?: any;
    list?: any;
}
export declare class ListDownloadForm extends React.Component<Props, any> {
    constructor(props: any);
    getDefaultSelectedColumns(): {};
    getListUIElements(): any;
    allColumnsSelected(): boolean;
    togglePopout: (visible: any) => void;
    toggleColumn: (column: any, value: any) => void;
    changeFormat: (value: any) => void;
    toggleCurrentlySelectedColumns: (e: any) => void;
    clickSelectAll: () => void;
    selectAllColumns(): void;
    selectNoColumns(): void;
    handleDownloadRequest: () => void;
    renderColumnSelect(): JSX.Element;
    render(): JSX.Element;
}
