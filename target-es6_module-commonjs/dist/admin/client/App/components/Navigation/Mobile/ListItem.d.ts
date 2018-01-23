/// <reference types="react" />
/**
 * A list item of the mobile navigation
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    href: string;
    onClick?: any;
}
export declare class MobileListItem extends React.Component<Props, any> {
    static displayName: string;
    render(): JSX.Element;
}
