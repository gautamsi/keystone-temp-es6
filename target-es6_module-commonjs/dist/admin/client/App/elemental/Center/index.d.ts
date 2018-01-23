/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare const Center: React.SFC<Props>;
export interface Props {
    Component?: PropTypes.func | string;
    height?: number | string;
    className?: string;
    style?: any;
    component?: string;
}
