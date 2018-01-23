"use strict";
/**
 * The login form of the signin screen
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../App/elemental");
exports.LoginForm = ({ email, handleInputChange, handleSubmit, isAnimating, password, }) => {
    return (React.createElement("div", { className: "auth-box__col" },
        React.createElement(elemental_1.Form, { onSubmit: handleSubmit, noValidate: true },
            React.createElement(elemental_1.FormField, { label: "Email", htmlFor: "email" },
                React.createElement(elemental_1.FormInput, { autoFocus: true, type: "email", name: "email", onChange: handleInputChange, value: email })),
            React.createElement(elemental_1.FormField, { label: "Password", htmlFor: "password" },
                React.createElement(elemental_1.FormInput, { type: "password", name: "password", onChange: handleInputChange, value: password })),
            React.createElement(elemental_1.Button, { disabled: isAnimating, color: "primary", type: "submit" }, "Sign In"))));
};
