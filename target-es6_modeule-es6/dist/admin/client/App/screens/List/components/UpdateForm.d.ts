/// <reference types="react" />
import * as React from 'react';
export interface Props {
    isOpen?: boolean;
    itemIds?: Array<any>;
    list?: any;
    onCancel?: any;
}
export declare class UpdateForm extends React.Component<Props, any> {
    static displayName: string;
    static readonly defaultProps: {
        isOpen: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    doFocus(): void;
    getOptions: () => {
        value: any;
        label: any;
    }[];
    getFieldProps(field: any): any;
    updateOptions: (fields: any) => void;
    handleChange(value: any): void;
    handleClose: () => void;
    renderFields(): JSX.Element;
    renderForm(): JSX.Element;
    render(): JSX.Element;
}
