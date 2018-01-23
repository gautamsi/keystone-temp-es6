/// <reference types="react" />
import * as React from 'react';
export declare class Filter extends React.Component<Props, any> {
    constructor(props: any);
    open: () => void;
    close: () => void;
    updateValue: (filterValue: any) => void;
    updateFilter: (e: any) => void;
    removeFilter: () => void;
    render(): JSX.Element;
}
export interface Props {
    dispatch: any;
    filter: {
        field: any;
        value: any;
    };
}
