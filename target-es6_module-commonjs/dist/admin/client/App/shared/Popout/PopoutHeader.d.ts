/// <reference types="react" />
/**
 * Render a header for a popout
 */
import * as React from 'react';
export interface Props {
    leftAction?: any;
    leftIcon?: string;
    title: string;
    transitionDirection?: 'next' | 'prev';
}
export declare class PopoutHeader extends React.Component<Props, {}> {
    displayName: string;
    render(): JSX.Element;
}
