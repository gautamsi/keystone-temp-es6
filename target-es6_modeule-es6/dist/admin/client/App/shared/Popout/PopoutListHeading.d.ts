/// <reference types="react" />
/**
 * Render a popout list heading
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    style?: any;
}
export declare class PopoutListHeading extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
