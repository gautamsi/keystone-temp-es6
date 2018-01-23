/// <reference types="react" />
/**
 * A navigation item of the secondary navigation
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    href: string;
    onClick?: any;
    path?: string;
    title?: string;
}
export declare class SecondaryNavItem extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
