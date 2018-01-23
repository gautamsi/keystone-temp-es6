/// <reference types="react" />
import * as React from 'react';
export interface Props {
    from?: any;
    logo?: any;
    brand?: any;
    user?: any;
    userCanAccessKeystone?: boolean;
}
export declare class SigninView extends React.Component<Props, any> {
    _isMounted: boolean;
    refs: {
        [key: string]: (Element);
        email: (HTMLInputElement);
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleInputChange: (e: any) => void;
    handleSubmit: (e: any) => void;
    /**
     * Display an error message
     *
     * @param  {String} message The message you want to show
     */
    displayError(message: any): void;
    finishAnimation(): void;
    render(): JSX.Element;
}
