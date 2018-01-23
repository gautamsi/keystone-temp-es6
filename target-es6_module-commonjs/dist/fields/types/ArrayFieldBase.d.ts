/// <reference types="react" />
import { FieldBase, FieldPropsBase } from './FieldBase';
export interface ArrayFieldPropsBase extends FieldPropsBase {
    value?: any[];
}
export declare abstract class ArrayFieldBase<T extends ArrayFieldPropsBase> extends FieldBase<T> {
    formatValue: Function;
    processInputValue: Function;
    getInputComponent: Function;
    cleanInput: Function;
    static readonly defaultProps: {
        adminPath: any;
        inputProps: {};
        labelProps: {};
        valueProps: {};
        size: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    addItem: () => void;
    removeItem(i: any): void;
    updateItem(i: any, event: any): void;
    valueChanged: (values: any) => void;
    renderField(): JSX.Element;
    renderItem(item: any, index: any): JSX.Element;
    renderValue(): JSX.Element;
    shouldCollapse(): boolean;
    addItemOnEnter: (event: any) => void;
}
