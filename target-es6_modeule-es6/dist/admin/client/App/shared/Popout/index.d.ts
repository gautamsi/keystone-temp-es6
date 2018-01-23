/// <reference types="react" />
/**
 * A Popout component.
 * One can also add a Header (Popout/Header), a Footer
 * (Popout/Footer), a Body (Popout/Body) and a Pan (Popout/Pane).
 */
import * as React from 'react';
import { Portal } from '../Portal';
export interface Props {
    isOpen?: boolean;
    onCancel?: any;
    onSubmit?: any;
    relativeToID: string;
    width?: number;
}
export declare class Popout extends React.Component<Props, any> {
    displayName: string;
    refs: {
        [key: string]: (Portal);
        portal: (Portal);
    };
    static readonly defaultProps: {
        width: number;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    getPortalDOMNode(): HTMLElement;
    calculatePosition: (isOpen: any) => void;
    renderPopout(): JSX.Element | (() => any);
    renderBlockout(): JSX.Element;
    render(): JSX.Element;
}
import { PopoutHeader } from './PopoutHeader';
import { PopoutBody } from './PopoutBody';
import { PopoutFooter } from './PopoutFooter';
import { PopoutPane } from './PopoutPane';
export declare namespace Popout {
    const Body: typeof PopoutBody;
    const Footer: typeof PopoutFooter;
    const Header: typeof PopoutHeader;
    const Pane: typeof PopoutPane;
}
