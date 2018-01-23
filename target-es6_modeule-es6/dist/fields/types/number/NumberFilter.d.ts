/// <reference types="react" />
import * as React from 'react';
export interface Props {
    field?: any;
    filter?: any;
    onChange?: any;
}
export declare class NumberFilter extends React.Component<Props> {
    static getDefaultValue(): {
        mode: string;
        value: string;
    };
    static readonly defaultProps: {
        filter: {
            mode: string;
            value: string;
        };
    };
    componentDidMount(): void;
    handleChangeBuilder: (type: any) => (e: any) => void;
    updateFilter(changedProp: any): void;
    selectMode: (e: any) => void;
    renderControls(mode: any): any;
    render(): JSX.Element;
}
