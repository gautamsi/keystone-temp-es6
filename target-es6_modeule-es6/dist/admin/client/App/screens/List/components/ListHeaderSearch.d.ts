/// <reference types="react" />
import * as React from 'react';
export declare const ListHeaderSearch: React.SFC<Props>;
export interface Props {
    focusInput?: boolean;
    handleChange: any;
    handleClear: any;
    handleKeyup: any;
    value?: string;
}
