/// <reference types="react" />
import * as React from 'react';
export declare const ModalFooter: React.SFC<Props>;
export interface Props {
    align?: 'center' | 'left' | 'right';
    children?: any;
    onClose?: Function;
    showCloseButton?: boolean;
    text?: string;
    className?: any;
}
