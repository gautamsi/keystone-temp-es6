/// <reference types="react" />
import * as React from 'react';
export declare class FormField extends React.Component<Props> {
    static contextTypes: {
        formLayout: any;
        labelWidth: any;
    };
    static childContextTypes: {
        formFieldId: any;
    };
    formFieldId: string;
    constructor(props: any);
    getChildContext(): {
        formFieldId: string;
    };
    render(): JSX.Element;
}
export interface Props {
    children?: any;
    cropLabel?: boolean;
    cssStyles?: any;
    htmlFor?: string;
    label?: string;
    offsetAbsentLabel?: boolean;
    className?: any;
    style?: any;
}
