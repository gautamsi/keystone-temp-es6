/// <reference types="react" />
/**
 * Renders a logo, defaulting to the Keystone logo if no brand is specified in
 * the configuration
 */
import * as React from 'react';
export declare const Brand: React.SFC<Props>;
export interface Props {
    loop?: any;
    logo?: any;
    brand?: any;
}
