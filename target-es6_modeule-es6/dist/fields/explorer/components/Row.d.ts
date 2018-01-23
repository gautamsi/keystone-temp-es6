/// <reference types="react" />
import * as React from 'react';
export declare class ExplorerRow extends React.Component<Props> {
    getChildContext(): {
        isCollapsed: boolean;
    };
    render(): JSX.Element;
    static readonly defaultProps: {
        gutter: number;
    };
}
export interface Props {
    className?: string;
    gutter?: number;
    style?: string;
    isCollapsed?: boolean;
}
