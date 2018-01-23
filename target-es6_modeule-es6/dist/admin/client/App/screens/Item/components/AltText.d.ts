/// <reference types="react" />
import * as React from 'react';
export interface Props {
    component?: string | any;
    modified?: JSX.Element | string;
    modifier?: '<alt>' | '<control>' | '<meta>' | '<shift>';
    normal?: JSX.Element | string;
    children?: any;
    title?: string;
    className: string;
}
export declare class AltText extends React.Component<Props, any> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyDown(e: any): void;
    handleKeyUp(e: any): void;
    render(): JSX.Element;
    static readonly defaultProps: {
        component: string;
        modifier: string;
    };
}
