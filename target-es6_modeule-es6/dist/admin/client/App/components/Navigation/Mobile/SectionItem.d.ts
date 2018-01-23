/// <reference types="react" />
/**
 * A mobile section
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    currentListKey?: string;
    href: string;
    lists?: Array<any>;
    onClick: any;
}
export declare class MobileSectionItem extends React.Component<Props, {}> {
    static displayName: string;
    renderLists(): JSX.Element;
    render(): JSX.Element;
}
