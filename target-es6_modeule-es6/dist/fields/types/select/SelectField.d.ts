/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    numeric?: any;
    ops?: any;
}
/**
 * TODO:
 * - Custom path support
 */
export declare class SelectField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    valueChanged: (newValue: any) => void;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
