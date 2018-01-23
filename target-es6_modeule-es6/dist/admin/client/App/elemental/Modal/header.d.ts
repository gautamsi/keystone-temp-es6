/// <reference types="react" />
import * as React from 'react';
export declare const ModalHeader: React.SFC<Props>;
export interface Props {
    children?: any;
    onClose?: Function;
    showCloseButton?: boolean;
    text?: string;
    className?: any;
}
