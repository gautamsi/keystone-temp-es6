/// <reference types="react" />
import * as React from 'react';
export declare const ListHeaderTitle: React.SFC<Props>;
export interface Props {
    activeSort?: object;
    availableColumns?: Array<any>;
    handleSortSelect: any;
    title?: string;
}
