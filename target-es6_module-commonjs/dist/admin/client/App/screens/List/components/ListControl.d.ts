/// <reference types="react" />
import * as React from 'react';
export interface Props {
    dragSource?: any;
    onClick?: any;
    type: 'check' | 'delete' | 'sortable';
    active?: boolean;
}
export declare class ListControl extends React.Component<Props> {
    renderControl(): any;
    render(): JSX.Element;
}
