/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    secure?: boolean;
}
export declare class CloudinaryImageField extends FieldBase<Props> {
    refs: {
        [key: string]: (Element);
        fileInput: (HTMLInputElement);
    };
    static displayName: string;
    static type: string;
    static getDefaultValue(): {};
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentWillUpdate(nextProps: any): void;
    hasLocal: () => boolean;
    hasExisting: () => boolean;
    hasImage: () => boolean;
    getFilename: () => any;
    getImageSource: (height?: number) => any;
    triggerFileBrowser: () => void;
    handleFileChange: (event: any) => void;
    openLightbox: (event: any) => void;
    closeLightbox: () => void;
    handleImageChange: (e: any) => void;
    handleRemove: (e: any) => void;
    undoRemove: () => void;
    renderLightbox(): JSX.Element;
    renderImagePreview(): JSX.Element;
    renderFileNameAndOptionalMessage(showChangeMessage?: boolean): JSX.Element;
    renderChangeMessage(): JSX.Element;
    renderClearButton(): JSX.Element;
    renderImageToolbar(): JSX.Element;
    renderFileInput(): JSX.Element;
    renderActionInput(): JSX.Element;
    renderUI(): JSX.Element;
}
