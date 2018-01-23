/// <reference types="react" />
import * as React from 'react';
export declare class ModalDialog extends React.Component<Props> {
    static readonly defaultProps: {
        enableKeyboardInput: boolean;
        width: number;
    };
    static childContextTypes: {
        onClose: any;
    };
    constructor(props: any);
    getChildContext(): {
        onClose: Function;
    };
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    handleKeyboardInput: (event: any) => boolean;
    handleBackdropClick: (e: any) => void;
    renderDialog(): JSX.Element;
    render(): JSX.Element;
}
export interface Props {
    backdropClosesModal?: boolean;
    enableKeyboardInput?: boolean;
    isOpen?: boolean;
    onClose: Function;
    width?: number;
}
