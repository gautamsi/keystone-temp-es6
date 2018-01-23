/// <reference types="react" />
import * as React from 'react';
export interface Props {
    checked?: boolean;
    component?: React.ComponentClass<any>;
    onChange?: any;
    readonly?: boolean;
}
export declare class Checkbox extends React.Component<Props, any> {
    static displayName: string;
    static readonly defaultProps: {
        component: string;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getStyles(): {
        alignItems: string;
        background: string;
        border: string;
        borderColor: string;
        borderRadius: number;
        boxShadow: string;
        color: string;
        display: string;
        fontSize: number;
        height: number;
        lineHeight: string;
        outline: string;
        padding: number;
        textAlign: string;
        textShadow: string;
        verticalAlign: string;
        width: number;
        msTransition: string;
        MozTransition: string;
        WebkitTransition: string;
        transition: string;
    };
    handleKeyDown: (e: any) => void;
    handleKeyUp: () => void;
    handleMouseOver: () => void;
    handleMouseDown: () => void;
    handleMouseUp: () => void;
    handleMouseOut: () => void;
    toggleActive: (pseudo: any) => void;
    toggleHover: (pseudo: any) => void;
    toggleFocus: (pseudo: any) => void;
    handleChange: () => void;
    render(): React.ReactElement<any>;
}
