/// <reference types="react" />
import * as React from 'react';
export declare const Spinner: React.SFC<Props>;
export interface Props {
    color?: 'danger' | 'default' | 'inverted' | 'primary' | 'success' | 'warning';
    size?: 'small' | 'medium' | 'large';
    className?: any;
}
