/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
    linkTo?: string;
}
export declare class DateColumn extends React.Component<Props> {
    static displayName: string;
    getValue(): string;
    render(): JSX.Element;
}
