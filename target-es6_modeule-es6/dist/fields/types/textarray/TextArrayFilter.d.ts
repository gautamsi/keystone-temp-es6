/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        mode?: any;
        presence?: any;
        value?: string;
    };
    onChange?: any;
}
export declare class TextArrayFilter extends React.Component<Props> {
    static getDefaultValue(): {
        mode: string;
        presence: string;
        value: string;
    };
    static readonly defaultProps: {
        filter: {
            mode: string;
            presence: string;
            value: string;
        };
    };
    updateFilter(value: any): void;
    selectMode(e: any): void;
    selectPresence(e: any): void;
    updateValue(e: any): void;
    render(): JSX.Element;
}
