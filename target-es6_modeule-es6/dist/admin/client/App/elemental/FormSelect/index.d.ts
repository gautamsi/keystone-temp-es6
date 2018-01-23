/// <reference types="react" />
import * as React from 'react';
export declare class FormSelect extends React.Component<Props> {
    static contextTypes: {
        formFieldId: any;
    };
    render(): JSX.Element;
}
export interface Props {
    onChange: any;
    options?: {
        label?: string;
        value?: string;
    }[];
    value: number | string;
    id?: any;
    disabled?: any;
}
