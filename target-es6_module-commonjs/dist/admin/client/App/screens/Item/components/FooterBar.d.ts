/// <reference types="react" />
import * as React from 'react';
export interface Props {
    style?: any;
}
export declare class FooterBar extends React.Component<Props, any> {
    mode: string;
    footerSize: {
        x: any;
        y: any;
    };
    windowSize: {
        x: number;
        y: number;
    };
    refs: {
        [key: string]: (Element);
        footer: (HTMLElement);
        wrapper: (HTMLElement);
    };
    constructor(props: any);
    static readonly defaultProps: {
        style: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    getWindowSize(): {
        x: number;
        y: number;
    };
    recalcPosition: () => void;
    render(): JSX.Element;
}
