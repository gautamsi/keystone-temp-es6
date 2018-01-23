/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    height?: any;
    style?: any;
}
export declare class TextareaField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
