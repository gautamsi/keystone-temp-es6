/// <reference types="react" />
import { FieldPropsBase, FieldBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    autoCleanup?: boolean;
    collapse?: boolean;
    label?: string;
    note?: string;
    path?: string;
    value?: {
        filename?: string;
        url?: any;
    };
}
export declare class FileField extends FieldBase<Props> {
    refs: {
        [key: string]: (Element);
        fileInput: (HTMLInputElement);
    };
    static displayName: string;
    static type: string;
    static getDefaultValue(): {};
    constructor(props: any);
    shouldCollapse(): boolean;
    componentWillUpdate(nextProps: any): void;
    hasFile: () => boolean;
    hasExisting(): boolean;
    getFilename: () => any;
    triggerFileBrowser: () => void;
    handleFileChange: (event: any) => void;
    handleRemove: (e: any) => void;
    undoRemove: () => void;
    renderFileNameAndChangeMessage(): JSX.Element;
    renderChangeMessage(): JSX.Element;
    renderClearButton(): JSX.Element;
    renderActionInput(): JSX.Element;
    renderUI(): JSX.Element;
}
