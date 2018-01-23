/// <reference types="react" />
/**
 * The form that's visible when "Create <ItemName>" is clicked on either the
 * List screen or the Item screen
 */
import * as React from 'react';
export interface Props {
    err?: any;
    isOpen?: boolean;
    list?: any;
    onCancel?: any;
    onCreate?: any;
}
export declare class CreateForm extends React.Component<Props, any> {
    static displayName: string;
    static readonly defaultProps: {
        err: any;
        isOpen: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyPress(evt: any): void;
    handleChange: (event: any) => void;
    getFieldProps(field: any): any;
    submitForm: (event: any) => void;
    renderForm(): JSX.Element;
    render(): JSX.Element;
}
