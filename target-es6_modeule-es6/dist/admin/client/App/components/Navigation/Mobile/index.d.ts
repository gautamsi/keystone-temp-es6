/// <reference types="react" />
/**
 * The mobile navigation, displayed on screens < 768px
 */
import * as React from 'react';
export interface Props {
    brand: string;
    currentListKey: string;
    currentSectionKey: string;
    sections: Array<any>;
    signoutUrl: string;
}
export declare class MobileNavigation extends React.Component<Props, any> {
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    toggleMenu: () => void;
    showMenu(): void;
    hideMenu(): void;
    handleEscapeKey: (event: any) => void;
    renderNavigation(): JSX.Element[];
    renderBlockout(): JSX.Element;
    renderMenu: () => JSX.Element | (() => any);
    render(): JSX.Element;
}
