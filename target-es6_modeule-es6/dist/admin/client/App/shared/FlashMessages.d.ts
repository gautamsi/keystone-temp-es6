/// <reference types="react" />
/**
 * Render a few flash messages, e.g. errors, success messages, warnings,...
 *
 * Use like this:
 * <FlashMessages
 *   messages={{
 *	   error: [{
 *	     title: 'There is a network problem',
 *	     detail: 'Please try again later...',
 *	   }],
 *   }}
 * />
 *
 * Instead of error, it can also be hilight, info, success or warning
 */
import * as React from 'react';
export interface Props {
    messages?: boolean | {
        error?: Array<any>;
        hilight?: Array<any>;
        info?: Array<any>;
        success?: Array<any>;
        warning?: Array<any>;
    };
}
export declare class FlashMessages extends React.Component<Props> {
    static displayName: string;
    renderMessages(messages: any, type: any): any;
    renderTypes(types: any): any[];
    render(): JSX.Element;
}
