/// <reference types="react" />
import * as React from 'react';
export declare class HiddenFileInput extends React.Component<Props> {
    props: any;
    target: any;
    constructor(props: any);
    clearValue(): void;
    clickDomNode(): void;
    hasValue(): boolean;
    render(): JSX.Element;
}
export interface Props {
    onChange: any;
}
