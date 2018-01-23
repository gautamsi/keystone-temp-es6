/// <reference types="react" />
/**
 * The Home view is the view one sees at /keystone. It shows a list of all lists,
 * grouped by their section.
 */
import * as React from 'react';
export declare class HomeView extends React.Component<any> {
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    getSpinner(): JSX.Element;
    render(): JSX.Element;
}
export declare const Home: React.ComponentClass<{}>;
