/// <reference types="react" />
/**
 * The primary (i.e. uppermost) navigation on desktop. Renders all sections and
 * the home-, website- and signout buttons.
 */
import * as React from 'react';
export interface Props {
    brand?: string;
    currentSectionKey: string;
    sections?: Array<any>;
    signoutUrl?: string;
}
export declare class PrimaryNavigation extends React.Component<Props, any> {
    static displayName: 'PrimaryNavigation';
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    renderSignout(): JSX.Element;
    renderBackButton(): JSX.Element;
    renderFrontLink(): JSX.Element;
    renderBrand(): JSX.Element;
    renderNavigation(): JSX.Element[];
    render(): JSX.Element;
}
