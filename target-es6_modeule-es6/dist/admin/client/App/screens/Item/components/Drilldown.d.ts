/// <reference types="react" />
import * as React from 'react';
export interface Props {
    items: Array<{
        href: string;
        label: string;
        separate: boolean;
        title?: any;
    }>;
    className?: any;
}
export declare const Drilldown: React.SFC<Props>;
