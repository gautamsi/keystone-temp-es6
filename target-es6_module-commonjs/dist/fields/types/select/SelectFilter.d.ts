/// <reference types="react" />
import * as React from 'react';
export interface Props {
    field?: any;
    filter?: {
        inverted?: boolean;
        value?: Array<any>;
    };
    onChange?: any;
}
export declare class SelectFilter extends React.Component<Props, any> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    detectOS(): void;
    handleKeyDown(e: any): void;
    handleKeyUp(e: any): void;
    toggleInverted(inverted: any): void;
    toggleAllOptions(): void;
    selectOption(option: any): void;
    removeOption(option: any): void;
    handleClick(option: any, selected: any): void;
    updateFilter(value: any): void;
    renderOptions(): any;
    render(): JSX.Element;
    static getDefaultValue(): {
        inverted: boolean;
        value: any[];
    };
    static readonly defaultProps: {
        filter: {
            inverted: boolean;
            value: any[];
        };
    };
}
