/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class EmailColumn extends React.Component<Props> {
    static displayName: string;
    renderValue(): JSX.Element;
    render(): JSX.Element;
}
