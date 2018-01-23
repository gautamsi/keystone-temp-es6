/// <reference types="react" />
import * as React from 'react';
export interface Props {
    className?: any;
    style?: any;
    href: string;
    label: string;
    separate: boolean;
    separator?: string | JSX.Element;
}
export declare const DrilldownItem: React.SFC<Props>;
