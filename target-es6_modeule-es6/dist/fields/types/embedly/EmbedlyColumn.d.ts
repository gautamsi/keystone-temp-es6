/// <reference types="react" />
import * as React from 'react';
export interface Props {
    col?: any;
    data?: any;
}
export declare class EmbedlyColumn extends React.Component<Props> {
    renderValue(): JSX.Element;
    render(): JSX.Element;
}
