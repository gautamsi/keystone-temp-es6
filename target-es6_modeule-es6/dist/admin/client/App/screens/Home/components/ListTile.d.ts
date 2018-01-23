/// <reference types="react" />
import * as React from 'react';
export interface Props {
    count: string;
    hideCreateButton: boolean;
    href: string;
    label: string;
    path: string;
    spinner: React.ReactNode;
}
/**
 * Displays information about a list and lets you create a new one.
 */
export declare class ListTile extends React.Component<Props> {
    render(): JSX.Element;
}
