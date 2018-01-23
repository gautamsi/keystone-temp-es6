/// <reference types="react" />
/**
 * Renders a confirmation dialog modal
 */
import * as React from 'react';
export declare const ConfirmationDialog: React.SFC<Props>;
export interface Props {
    body?: string;
    cancelLabel?: string;
    confirmationLabel?: string;
    confirmationType?: 'danger' | 'primary' | 'success' | 'warning';
    onCancel?: any;
    onConfirmation?: any;
    html?: any;
    isOpen?: boolean;
}
