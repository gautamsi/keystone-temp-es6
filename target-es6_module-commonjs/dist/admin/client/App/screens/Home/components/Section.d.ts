/// <reference types="react" />
import * as React from 'react';
export interface ISectionProps {
    children: JSX.Element;
    icon?: string;
    id?: string;
    label: string;
}
export declare class Section extends React.Component<ISectionProps> {
    render(): JSX.Element;
}
