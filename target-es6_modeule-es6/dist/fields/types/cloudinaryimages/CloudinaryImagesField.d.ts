/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    secure?: boolean;
}
export declare class CloudinaryImagesField extends FieldBase<Props> {
    refs: {
        [key: string]: (Element);
        fileInput: (HTMLInputElement);
    };
    static displayName: string;
    static type: string;
    static getDefaultValue(): any[];
    constructor(props: any);
    componentWillUpdate(nextProps: any): void;
    buildInitialState(props: any): {
        thumbnails: any;
        uploadFieldPath: string;
    };
    getThumbnail(props: any, index: any): JSX.Element;
    triggerFileBrowser: () => void;
    hasFiles(): any;
    openLightbox: (event: any, index: any) => void;
    closeLightbox: () => void;
    lightboxPrevious: () => void;
    lightboxNext: () => void;
    removeImage: (index: any) => void;
    getCount(key: any): number;
    clearFiles: () => void;
    uploadFile: (event: any) => void;
    renderFileInput(): JSX.Element | (() => any);
    renderValueInput(): JSX.Element | (() => any);
    renderLightbox(): JSX.Element | (() => any);
    renderToolbar(): JSX.Element;
    renderUI(): JSX.Element;
}
