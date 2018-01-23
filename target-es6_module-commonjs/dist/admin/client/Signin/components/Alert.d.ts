/// <reference types="react" />
/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */
import * as React from 'react';
export declare const AlertView: React.SFC<Props>;
export interface Props {
    invalidMessage?: string;
    isInvalid?: boolean;
    signedOut?: boolean;
}
