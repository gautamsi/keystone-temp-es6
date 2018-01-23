/// <reference types="react" />
import * as React from 'react';
export declare class Form extends React.Component<Props> {
    static readonly defaultProps: {
        component: string;
        layout: string;
    };
    static childContextTypes: {
        formLayout: any;
        labelWidth: any;
    };
    getChildContext(): {
        formLayout: "basic" | "horizontal" | "inline";
        labelWidth: any;
    };
    render(): JSX.Element;
}
export interface Props {
    children: any;
    component?: any;
    layout?: 'basic' | 'horizontal' | 'inline';
    labelWidth?: any;
    className?: any;
    onSubmit?: any;
    variant?: any;
}
