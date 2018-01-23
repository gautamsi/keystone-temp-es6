/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        inverted?: boolean;
        street?: string;
        city?: string;
        state?: string;
        code?: string;
        country?: string;
    };
    onChange?: any;
}
export declare class TextFilter extends React.Component<Props> {
    static getDefaultValue(): {
        inverted: boolean;
        street: any;
        city: any;
        state: any;
        code: any;
        country: any;
    };
    static readonly defaultProps: {
        filter: {
            inverted: boolean;
            street: any;
            city: any;
            state: any;
            code: any;
            country: any;
        };
    };
    updateFilter(key: any, val: any): void;
    toggleInverted: (value: any) => void;
    updateValue: (e: any) => void;
    render(): JSX.Element;
}
