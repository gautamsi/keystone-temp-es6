/// <reference types="react" />
/**
 * The login form of the signin screen
 */
import * as React from 'react';
export declare const LoginForm: React.SFC<Props>;
export interface Props {
    email?: string;
    handleInputChange?: any;
    handleSubmit: any;
    isAnimating?: boolean;
    password?: string;
}
