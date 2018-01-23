/// <reference types="react" />
import { FieldPropsBase, FieldBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    path: string;
    value?: string;
}
export declare class EmailField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    renderField(): JSX.Element;
    renderValue(): JSX.Element;
}
