/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class PasswordColumn extends React.Component<Props> {
    static displayName: string;
    renderValue(): "" | "********";
    render(): JSX.Element;
}
