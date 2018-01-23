/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        lat?: number;
        lon?: number;
        distance?: {
            mode?: string;
            value?: number;
        };
    };
    onChange?: any;
}
export declare class TextFilter extends React.Component<Props> {
    static getDefaultValue(): {
        lat: any;
        lon: any;
        distance: {
            mode: string;
            value: any;
        };
    };
    static readonly defaultProps: {
        filter: {
            lat: any;
            lon: any;
            distance: {
                mode: string;
                value: any;
            };
        };
    };
    updateFilter(value: any): void;
    changeLat: (evt: any) => void;
    changeLon: (evt: any) => void;
    changeDistanceValue: (evt: any) => void;
    changeDistanceMode: (mode: any) => void;
    render(): JSX.Element;
}
