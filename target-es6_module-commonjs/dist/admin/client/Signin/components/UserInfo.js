"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../App/elemental");
// TODO Figure out if we should change "Keystone" to "Admin area"
exports.UserInfo = ({ adminPath, signoutPath, userCanAccessKeystone, userName, }) => {
    const adminButton = userCanAccessKeystone ? (React.createElement(elemental_1.Button, { href: adminPath, color: "primary" }, "Open Keystone")) : null;
    return (React.createElement("div", { className: "auth-box__col" },
        React.createElement("p", null,
            "Hi ",
            userName,
            ","),
        React.createElement("p", null, "You're already signed in."),
        adminButton,
        React.createElement(elemental_1.Button, { href: signoutPath, variant: "link", color: "cancel" }, "Sign Out")));
};
