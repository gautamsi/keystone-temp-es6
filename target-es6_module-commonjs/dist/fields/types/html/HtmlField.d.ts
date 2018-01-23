/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    wysiwyg?: any;
    height?: any;
}
export declare class HtmlField extends FieldBase<Props> {
    _currentValue: any;
    editor: any;
    static displayName: string;
    static type: string;
    constructor(props: any);
    initWysiwyg(): void;
    removeWysiwyg(state: any): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    focusChanged(focused: any): void;
    valueChanged: (event: any) => void;
    getOptions(): {
        selector: string;
        toolbar: string;
        plugins: string[];
        menubar: any;
        skin: any;
        uploadimage_form_url: any;
    };
    renderField(): JSX.Element;
    renderValue(): JSX.Element;
}
