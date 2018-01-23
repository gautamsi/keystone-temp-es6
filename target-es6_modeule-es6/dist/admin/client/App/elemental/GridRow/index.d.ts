/// <reference types="react" />
import * as React from 'react';
export declare class GridRow extends React.Component<Props> {
    getChildContext(): {
        gutter: number;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
    };
    render(): JSX.Element;
    static readonly defaultProps: {
        gutter: number;
        xsmall: string;
    };
    static childContextTypes: {
        gutter: any;
        xsmall: any;
        small: any;
        medium: any;
        large: any;
    };
}
export interface Props {
    gutter?: number;
    large?: string;
    medium?: string;
    small?: string;
    xsmall?: string;
    className?: any;
    styles?: any;
}
