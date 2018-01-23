/// <reference types="react" />
import * as React from 'react';
export interface Props {
    filter?: {
        exists?: any;
    };
    onChange?: any;
}
export declare class CloudinaryImageFilter extends React.Component<Props> {
    static getDefaultValue(): {
        exists: boolean;
    };
    static readonly defaultProps: {
        filter: {
            exists: boolean;
        };
    };
    toggleExists: (value: any) => void;
    render(): JSX.Element;
}
