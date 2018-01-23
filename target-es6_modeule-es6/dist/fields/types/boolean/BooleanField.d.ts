/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    indent?: boolean;
    label?: string;
    onChange: any;
    path: string;
    value?: boolean;
}
export declare class BooleanField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    valueChanged: (value: any) => void;
    renderFormInput(): JSX.Element;
    renderUI(): JSX.Element;
}
