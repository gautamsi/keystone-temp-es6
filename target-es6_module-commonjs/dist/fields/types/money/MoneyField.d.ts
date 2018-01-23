/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    onChange: any;
    path: string;
    value?: number;
}
export declare class MoneyField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    valueChanged: (event: any) => void;
    renderField(): JSX.Element;
}
