/// <reference types="react" />
import * as React from 'react';
export declare class Pagination extends React.Component<Props> {
    renderCount(): JSX.Element;
    renderPages(): JSX.Element;
    render(): JSX.Element;
}
export interface Props {
    className?: any;
    currentPage: number;
    limit?: number;
    onPageSelect?: any;
    pageSize: number;
    plural?: string;
    singular?: string;
    style?: object;
    total: number;
}
