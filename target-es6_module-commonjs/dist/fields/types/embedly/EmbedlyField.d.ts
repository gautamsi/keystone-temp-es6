/// <reference types="react" />
import { FieldPropsBase, FieldBase } from '../FieldBase';
export declare class EmbedlyField extends FieldBase<FieldPropsBase> {
    static displayName: string;
    static type: string;
    static getDefaultValue(): {};
    renderField(): JSX.Element;
    renderValue(path?: any, label?: any, multiline?: any): JSX.Element;
    renderAuthor(): JSX.Element;
    renderDimensions(): JSX.Element;
    renderPreview(): JSX.Element;
    renderUI(): JSX.Element;
}
