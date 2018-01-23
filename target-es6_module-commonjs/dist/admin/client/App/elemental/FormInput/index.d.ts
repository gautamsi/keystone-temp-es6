/// <reference types="react" />
import * as React from 'react';
export declare class FormInput extends React.Component<Props> {
    target: HTMLElement;
    blur(): void;
    focus(): void;
    render(): JSX.Element;
    static readonly defaultProps: {
        size: string;
        type: string;
    };
    static contextTypes: {
        formLayout: any;
        formFieldId: any;
    };
}
export interface Props {
    cssStyles?: any;
    multiline?: boolean;
    size?: 'default' | 'small' | 'large';
    type?: string;
    disabled?: boolean;
    className?: string;
    noedit?: boolean;
    id?: string;
    onChange?: any;
    placeholder?: any;
    value?: any;
    autoFocus?: any;
    autoComplete?: any;
    name?: any;
    onClick?: any;
    style?: any;
}
