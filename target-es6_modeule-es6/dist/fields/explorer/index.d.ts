/// <reference types="react" />
import * as React from 'react';
export interface Props {
    params?: any;
    children?: any;
    any: any;
}
export declare class App extends React.Component<Props, any> {
    constructor(props: any);
    toggleSidebar(): void;
    render(): JSX.Element;
}
