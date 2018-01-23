/// <reference types="react" />
import { FieldPropsBase, FieldBase } from '../FieldBase';
export interface NameShape {
    first?: string;
    last?: string;
}
export interface Props extends FieldPropsBase {
    onChange: any;
    path: string;
    paths: NameShape;
    value: NameShape;
}
export declare class NameField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    static getDefaultValue(): {
        first: string;
        last: string;
    };
    valueChanged: (which: any, event?: any) => void;
    changeFirst: (event: any) => void;
    changeLast: (event: any) => void;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
