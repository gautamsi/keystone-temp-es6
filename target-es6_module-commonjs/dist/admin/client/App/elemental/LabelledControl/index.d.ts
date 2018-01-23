/// <reference types="react" />
import * as React from 'react';
export declare const LabelledControl: React.SFC<Props>;
export interface Props {
    inline?: boolean;
    title?: string;
    type: 'checkbox' | 'radio';
    label?: any;
    className?: any;
    checked?: any;
    onChange?: any;
    value?: any;
    autoFocus?: any;
    name?: any;
}
