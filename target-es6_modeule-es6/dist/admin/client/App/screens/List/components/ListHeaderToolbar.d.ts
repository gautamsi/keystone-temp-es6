/// <reference types="react" />
import * as React from 'react';
export declare const ListHeaderToolbar: React.SFC<Props>;
export interface Props {
    columnsActive?: Array<any>;
    columnsAvailable?: Array<any>;
    createIsAvailable?: boolean;
    createListName?: string;
    createOnClick: any;
    dispatch: any;
    expandIsActive?: boolean;
    expandOnClick: any;
    filtersActive?: Array<any>;
    filtersAvailable?: Array<any>;
    list?: object;
    searchHandleChange: any;
    searchHandleClear: any;
    searchHandleKeyup: any;
    searchValue?: string;
}
