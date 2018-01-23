/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class RelationshipColumn extends React.Component<Props> {
    static displayName: string;
    renderMany(value: any): JSX.Element;
    renderValue(value: any): JSX.Element;
    render(): JSX.Element;
}
