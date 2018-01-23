/// <reference types="react" />
/**
 * Render a popout list item
 */
import * as React from 'react';
export interface Props {
    icon?: string;
    iconHover?: string;
    isSelected?: boolean;
    label: string;
    onClick?: any;
}
export declare class PopoutListItem extends React.Component<Props, any> {
    static displayName: string;
    constructor(props: any);
    hover: () => void;
    unhover: () => void;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
