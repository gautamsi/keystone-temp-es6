/// <reference types="react" />
/**
 * Render a footer for a popout
 */
import * as React from 'react';
export interface Props {
    children?: React.ReactNode;
    primaryButtonAction?: any;
    primaryButtonIsSubmit?: boolean;
    primaryButtonLabel?: string;
    secondaryButtonAction?: any;
    secondaryButtonLabel?: string;
}
export declare class PopoutFooter extends React.Component<Props> {
    static displayName: string;
    renderPrimaryButton(): JSX.Element;
    renderSecondaryButton(): JSX.Element;
    render(): JSX.Element;
}
