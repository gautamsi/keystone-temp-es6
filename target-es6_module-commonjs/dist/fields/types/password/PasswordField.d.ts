/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    paths?: any;
}
export declare class PasswordField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    constructor(props: any);
    valueChanged: (which: any, event?: any) => void;
    showChangeUI: () => void;
    onCancel: () => void;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
    renderFields(): JSX.Element;
    renderChangeButton(): JSX.Element;
}
