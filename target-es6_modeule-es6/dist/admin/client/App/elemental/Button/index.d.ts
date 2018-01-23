/// <reference types="react" />
import * as React from 'react';
export declare type BUTTON_SIZES = 'large' | 'medium' | 'small' | 'xsmall';
export declare type BUTTON_VARIANTS = 'fill' | 'hollow' | 'link';
export declare type BUTTON_COLORS = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'cancel' | 'delete';
export declare class Button extends React.Component<Props> {
    static readonly defaultProps: {
        cssStyles: any[];
        color: string;
        variant: string;
    };
    render(): JSX.Element;
}
export interface Props {
    active?: boolean;
    block?: boolean;
    color?: BUTTON_COLORS;
    component?: any;
    cssStyles?: {
        _definition?: object;
        _name?: string;
    }[];
    disabled?: boolean;
    href?: string;
    size?: BUTTON_SIZES;
    variant?: BUTTON_VARIANTS;
    className?: any;
    type?: string;
    onClick?: any;
    style?: any;
}
