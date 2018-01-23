/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import colors from './colors';
export declare const Chip: React.SFC<Props>;
export { colors };
export interface Props {
    className?: any;
    color?: any;
    inverted?: boolean;
    label: string;
    onClear?: PropTypes.func;
    onClick?: PropTypes.func;
}
