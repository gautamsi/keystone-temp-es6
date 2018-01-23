/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class BooleanColumn extends React.Component<Props, any> {
    static displayName: string;
    renderValue(): JSX.Element;
    render(): JSX.Element;
}
