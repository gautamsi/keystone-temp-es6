/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    onChange?: any;
    path?: string;
    value?: string;
}
export declare class ColorField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    constructor(props: any);
    updateValue(value: any): void;
    handleInputChange: (event: any) => void;
    handleClick: () => void;
    handleClose: () => void;
    handlePickerChange: (color: any) => void;
    renderSwatch(): JSX.Element;
    renderField(): JSX.Element;
}
