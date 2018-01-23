/// <reference types="react" />
import * as React from 'react';
export declare const Alert: React.SFC<Props>;
export interface Props {
    color: 'danger' | 'error' | 'info' | 'success' | 'warning';
    component: any;
    className?: any;
    children?: any;
}
