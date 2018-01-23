/// <reference types="react" />
import * as React from 'react';
export declare class ResponsiveText extends React.Component<Props, any> {
    static readonly defaultProps: {
        component: string;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    render(): JSX.Element;
}
export interface Props {
    hiddenLG?: string;
    hiddenMD?: string;
    hiddenSM?: string;
    hiddenXS?: string;
    visibleLG?: string;
    visibleMD?: string;
    visibleSM?: string;
    visibleXS?: string;
}
