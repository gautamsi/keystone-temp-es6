/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    paths?: any;
    wysiwyg?: any;
    height?: any;
}
export declare class MarkdownField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    static getDefaultValue(): {};
    shouldCollapse(): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderField(): JSX.Element;
    renderValue(): JSX.Element;
}
