/// <reference types="react" />
/**
 * Render the body of a popout
 */
import * as React from 'react';
export interface Props {
    children: Element;
    className?: string;
    scrollable?: boolean;
}
export declare class PopoutBody extends React.Component<any, any> {
    displayName: 'PopoutBody';
    render(): JSX.Element;
}
