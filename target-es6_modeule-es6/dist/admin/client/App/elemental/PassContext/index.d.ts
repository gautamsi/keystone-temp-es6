/// <reference types="react" />
import * as React from 'react';
export declare class PassContext extends React.Component<Props> {
    static childContextTypes: {
        onClose: any;
    };
    getChildContext(): any;
    render(): React.ReactElement<any>;
}
export interface Props {
    context: any;
}
