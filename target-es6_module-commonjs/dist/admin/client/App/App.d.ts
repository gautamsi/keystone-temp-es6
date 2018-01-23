/// <reference types="react" />
/**
 * The App component is the component that is rendered around all views, and
 * contains common things like navigation, footer, etc.
 */
import * as React from 'react';
export interface Props {
    history?: any;
    match?: {
        params: any;
    };
}
export declare const App: React.SFC<Props>;
