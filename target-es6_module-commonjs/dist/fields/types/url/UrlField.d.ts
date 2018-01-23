/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export declare class UrlField extends FieldBase<FieldPropsBase> {
    static displayName: string;
    static type: string;
    openValue: () => void;
    renderLink(): JSX.Element;
    renderField(): JSX.Element;
    wrapField(): JSX.Element;
    renderValue(): JSX.Element;
}
