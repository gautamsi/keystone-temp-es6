/// <reference types="react" />
/**
 * A item in the primary navigation. If it has a "to" prop it'll render a
 * react-router "Link", if it has a "href" prop it'll render a simple "a" tag
 */
import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    className?: string;
    href?: string;
    label?: string;
    title?: string;
    to?: string;
    active?: boolean;
}
export declare const PrimaryNavItem: React.SFC<Props>;
