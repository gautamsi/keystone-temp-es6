/// <reference types="react" />
import * as React from 'react';
export interface Props {
    FilterComponent?: any;
    FieldComponent?: any;
    value?: any;
    readmeIsVisible?: any;
    spec?: any;
    i?: any;
}
export declare class ExplorerFieldType extends React.Component<Props, any> {
    constructor(props: any);
    onFieldChange(e: any): void;
    onFilterChange(value: any): void;
    render(): JSX.Element;
}
