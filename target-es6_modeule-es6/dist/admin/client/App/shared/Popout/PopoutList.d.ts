/// <reference types="react" />
/**
 * Render a popout list. Can also use PopoutListItem and PopoutListHeading
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
}
export declare class PopoutList extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
import { PopoutListItem } from './PopoutListItem';
import { PopoutListHeading } from './PopoutListHeading';
export declare namespace PopoutList {
    const Item: typeof PopoutListItem;
    const Heading: typeof PopoutListHeading;
}
