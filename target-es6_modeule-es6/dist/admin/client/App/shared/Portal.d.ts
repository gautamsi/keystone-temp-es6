/// <reference types="react" />
/**
 * Used by the Popout component and the Lightbox component of the fields for
 * popouts. Renders a non-react DOM node.
 */
import * as React from 'react';
export declare class Portal extends React.Component<{
    className?: any;
}> {
    displayName: string;
    portalElement: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    getPortalDOMNode(): HTMLElement;
    render(): any;
}
