/// <reference types="react" />
import * as React from 'react';
export interface FieldPropsBase {
    autoFocus?: any;
    value?: any;
    inputProps?: any;
    onChange?: any;
    mode?: any;
    noedit?: boolean;
    collapse?: any;
    path?: any;
    inputNamePrefix?: any;
    note?: any;
    className?: any;
    monospace?: any;
    type?: any;
    size?: any;
    label?: string;
    dependsOn?: any;
    values?: any;
}
export declare abstract class FieldBase<T extends FieldPropsBase> extends React.Component<T, any> {
    focusTargetRef: string;
    supports?: any;
    constructor(props: any);
    static getDefaultValue(field: any): any;
    static readonly defaultProps: {
        adminPath: any;
        inputProps: {};
        labelProps: {};
        valueProps: {};
        size: string;
    };
    getInputName: (path: any) => any;
    valueChanged: (event: any) => void;
    shouldCollapse(): boolean;
    shouldRenderField(): boolean;
    focus(): void;
    renderNote(): JSX.Element;
    renderField(): JSX.Element;
    renderValue(): JSX.Element;
    renderUI(): JSX.Element;
    componentWillMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    uncollapse: () => void;
    renderCollapse(): JSX.Element;
    render(): JSX.Element;
}
