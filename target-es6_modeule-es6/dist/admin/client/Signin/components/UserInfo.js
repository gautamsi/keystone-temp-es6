import * as React from 'react';
import { Button } from '../../App/elemental';
// TODO Figure out if we should change "Keystone" to "Admin area"
export const UserInfo = ({ adminPath, signoutPath, userCanAccessKeystone, userName, }) => {
    const adminButton = userCanAccessKeystone ? (React.createElement(Button, { href: adminPath, color: "primary" }, "Open Keystone")) : null;
    return (React.createElement("div", { className: "auth-box__col" },
        React.createElement("p", null,
            "Hi ",
            userName,
            ","),
        React.createElement("p", null, "You're already signed in."),
        adminButton,
        React.createElement(Button, { href: signoutPath, variant: "link", color: "cancel" }, "Sign Out")));
};
