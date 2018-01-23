/// <reference types="react" />
import * as React from 'react';
export interface Props {
    data?: any;
    list?: any;
    dispatch?: any;
    router?: any;
}
export declare class EditForm extends React.Component<Props, any> {
    refs: {
        [key: string]: React.ReactInstance;
        keyOrIdInput: (HTMLInputElement);
        editForm: (HTMLFormElement);
    };
    __isMounted: boolean;
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getFieldProps(field: any): any;
    handleChange: (event: any) => void;
    toggleDeleteDialog: () => void;
    toggleResetDialog: () => void;
    handleReset: () => void;
    handleDelete: () => void;
    handleKeyFocus: () => void;
    removeConfirmationDialog(): void;
    updateItem: () => void;
    renderKeyOrId(): JSX.Element;
    renderNameField(): JSX.Element;
    renderFormElements(): any;
    renderFooterBar(): JSX.Element;
    renderTrackingMeta(): JSX.Element;
    render(): JSX.Element;
}
