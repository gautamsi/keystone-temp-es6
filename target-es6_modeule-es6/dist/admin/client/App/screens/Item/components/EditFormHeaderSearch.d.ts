/// <reference types="react" />
import * as React from 'react';
export declare class EditFormHeaderSearch extends React.Component<Props, any> {
    constructor(props: any);
    focusField: () => void;
    render(): JSX.Element;
}
export interface Props {
    onChange: any;
    value?: string;
    onKeyUp?: any;
}
