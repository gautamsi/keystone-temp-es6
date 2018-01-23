/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        mode?: any;
        inverted?: boolean;
        value?: string;
    };
    field?: any;
    onChange?: any;
}
export declare class TextFilter extends React.Component<Props> {
    static getDefaultValue(): {
        mode: string;
        inverted: boolean;
        value: string;
    };
    static readonly defaultProps: {
        filter: {
            mode: string;
            inverted: boolean;
            value: string;
        };
    };
    updateFilter(value: any): void;
    selectMode: (e: any) => void;
    toggleInverted: (inverted: any) => void;
    updateValue: (e: any) => void;
    render(): JSX.Element;
}
