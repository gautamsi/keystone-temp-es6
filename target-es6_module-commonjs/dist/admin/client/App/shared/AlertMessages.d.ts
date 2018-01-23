/// <reference types="react" />
import * as React from 'react';
/**
 * This renders alerts for API success and error responses.
 *   Error format: {
 *     error: 'validation errors' // The unique error type identifier
 *     detail: { ... } // Optional details specific to that error type
 *   }
 *   Success format: {
 *     success: 'item updated', // The unique success type identifier
 *     details: { ... } // Optional details specific to that success type
 *   }
 *   Eventually success and error responses should be handled individually
 *   based on their type. For example: validation errors should be displayed next
 *   to each invalid field and signin errors should promt the user to sign in.
 */
export interface Props {
    alerts?: {
        error?: any;
        success?: any;
    };
}
export declare class AlertMessages extends React.Component<Props> {
    static displayName: string;
    constructor(props: any);
    renderValidationErrors(): JSX.Element;
    render(): JSX.Element;
}
