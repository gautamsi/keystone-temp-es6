/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        mode?: any;
        presence?: any;
        value?: number | string | {
            min?: number;
            max?: number;
        };
    };
    onChange?: any;
}
export declare class NumberArrayFilter extends React.Component<Props> {
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
    handleValueChangeBuilder: (type: any) => (e: any) => void;
    updateFilter(changedProp: any): void;
    selectMode: (e: any) => void;
    selectPresence: (e: any) => void;
    renderControls(presence: any, mode: any): any;
    render(): JSX.Element;
}
