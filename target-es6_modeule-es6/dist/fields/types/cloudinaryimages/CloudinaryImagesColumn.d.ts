/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class CloudinaryImagesColumn extends React.Component<Props> {
    static displayName: string;
    renderMany(value: any): any[];
    renderValue(value: any): JSX.Element;
    render(): JSX.Element;
}
