/// <reference types="react" />
/**
 * The global Footer, displays a link to the website and the current Keystone
 * version in use
 */
import * as React from 'react';
export interface Props {
    appversion?: string;
    backUrl?: string;
    brand?: string;
    user?: any;
    User?: any;
    version?: string;
}
export declare class Footer extends React.Component<Props, {}> {
    static displayName: string;
    renderUser(): JSX.Element;
    render(): JSX.Element;
}
