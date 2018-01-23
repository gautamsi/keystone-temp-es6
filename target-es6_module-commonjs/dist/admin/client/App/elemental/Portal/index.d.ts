/// <reference types="react" />
import * as React from 'react';
export declare class Portal extends React.Component {
    static contextTypes: {
        onClose: any;
    };
    portalElement: any;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): any;
}
