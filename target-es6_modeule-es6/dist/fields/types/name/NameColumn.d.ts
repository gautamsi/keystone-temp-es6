/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
    linkTo?: string;
}
export declare class NameColumn extends React.Component<Props> {
    static displayName: string;
    renderValue(): any;
    render(): JSX.Element;
}
