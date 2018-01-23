/// <reference types="react" />
import * as React from 'react';
export interface Props {
    handleSortSelect?: any;
    activeSort?: any;
    availableColumns?: any;
}
export declare class ListSort extends React.Component<Props, any> {
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyDown(e: any): void;
    handleKeyUp(e: any): void;
    handleSortSelect: (path: any, inverted: any) => void;
    openPopout: () => void;
    closePopout: () => void;
    updateSearch: (e: any) => void;
    renderSortOptions(): any;
    render(): JSX.Element;
}
