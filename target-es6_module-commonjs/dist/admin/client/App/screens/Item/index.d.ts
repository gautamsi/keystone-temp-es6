/// <reference types="react" />
/**
 * Item View
 *
 * This is the item view, it is rendered when users visit a page of a specific
 * item. This mainly renders the form to edit the item content in.
 */
import * as React from 'react';
export interface Props {
    dispatch: any;
    currentList: any;
    match: {
        params: any;
    };
    relationshipData: any;
    drag: any;
    routeParams: any;
    ready: boolean;
    error: any;
    data: any;
}
export declare const Item: React.ComponentClass<{}>;
