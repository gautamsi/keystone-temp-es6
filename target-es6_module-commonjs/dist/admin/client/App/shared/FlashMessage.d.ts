/// <reference types="react" />
/**
 * A single flash message component. Used by FlashMessages.js
 */
import * as React from 'react';
export interface Props {
    message: string | any;
    type?: string;
}
export declare class FlashMessage extends React.Component<Props> {
    renderMessage(message: any): JSX.Element;
    render(): JSX.Element;
}
