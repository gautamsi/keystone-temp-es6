/// <reference types="react" />
import * as React from 'react';
export declare const SegmentedControl: React.SFC<Props>;
export interface Props {
    color?: 'danger' | 'default' | 'error' | 'info' | 'primary' | 'success' | 'warning';
    cropText?: boolean;
    equalWidthSegments?: boolean;
    inline?: boolean;
    onChange: any;
    options: {
        disabled?: boolean;
        label?: string;
        value?: boolean | number | string;
    }[];
    value?: boolean | number | string;
    className?: any;
}
