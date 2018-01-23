/// <reference types="react" />
import * as React from 'react';
export interface Props {
    readme?: any;
    FilterComponent?: any;
    FieldComponent?: any;
    value?: any;
    params?: any;
    toggleSidebar?: any;
    spec?: any;
}
export declare class ExplorerFieldType extends React.Component<Props, any> {
    constructor(props: any);
    componentWillReceiveProps(newProps: any): void;
    onFieldChange(e: any): void;
    onFilterChange(value: any): void;
    toggleReadme(): void;
    render(): JSX.Element;
}
