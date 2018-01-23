/// <reference types="react" />
import * as React from 'react';
export declare class ListColumnsForm extends React.Component<{
    activeColumns?: any;
    dispatch?: any;
    availableColumns?: any;
}, any> {
    static displayName: string;
    constructor(props: any);
    getSelectedColumnsFromStore(): {};
    togglePopout: (visible: any) => void;
    toggleColumn: (path: any, value: any) => void;
    applyColumns: () => void;
    updateSearch: (e: any) => void;
    renderColumns(): any;
    render(): JSX.Element;
}
