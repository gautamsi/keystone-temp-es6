/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        value?: boolean;
    };
    onChange?: any;
}
export declare class BooleanFilter extends React.Component<Props> {
    static getDefaultValue(): {
        value: boolean;
    };
    static readonly defaultProps: {
        filter: {
            value: boolean;
        };
    };
    updateValue: (value: any) => void;
    render(): JSX.Element;
}
