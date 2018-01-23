/// <reference types="react" />
/**
 * The secondary navigation links to inidvidual lists of a section
 */
import * as React from 'react';
export interface Props {
    itemId?: string;
    currentListKey?: string;
    lists: Array<any>;
    dispatch: any;
    currentList: any;
}
export declare const SecondaryNavigation: React.ComponentClass<{}>;
