/// <reference types="react" />
import * as React from 'react';
export declare const UserInfo: React.SFC<Props>;
export interface Props {
    adminPath: string;
    signoutPath: string;
    userCanAccessKeystone?: boolean;
    userName: string;
}
