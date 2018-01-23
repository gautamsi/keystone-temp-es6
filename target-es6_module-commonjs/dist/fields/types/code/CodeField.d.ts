/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    editor?: any;
    height?: number;
}
/**
 * TODO:
 * - Remove dependency on lodash
 */
export declare class CodeField extends FieldBase<Props> {
    _currentCodemirrorValue: any;
    codeMirror: any;
    static displayName: string;
    static type: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    focus(): void;
    focusChanged(focused: any): void;
    codemirrorValueChanged(doc: any, change: any): void;
    renderCodemirror(): JSX.Element;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
