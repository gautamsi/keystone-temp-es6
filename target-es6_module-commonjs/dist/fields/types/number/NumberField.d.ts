/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export declare class NumberField extends FieldBase<FieldPropsBase> {
    static displayName: string;
    static type: string;
    valueChanged: (event: any) => void;
    renderField(): JSX.Element;
}
