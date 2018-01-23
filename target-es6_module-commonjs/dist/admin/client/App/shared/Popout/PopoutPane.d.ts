/// <reference types="react" />
/**
 * Render a popout pane, calls props.onLayout when the component mounts
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    onLayout?: any;
}
export declare class PopoutPane extends React.Component<Props> {
    refs: {
        [key: string]: (Element);
        el: (HTMLInputElement);
    };
    static displayName: string;
    static readonly defaultProps: {
        onLayout: () => void;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
