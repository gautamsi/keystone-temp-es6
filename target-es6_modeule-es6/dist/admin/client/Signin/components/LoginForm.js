/**
 * The login form of the signin screen
 */
import * as React from 'react';
import { Button, Form, FormField, FormInput } from '../../App/elemental';
export const LoginForm = ({ email, handleInputChange, handleSubmit, isAnimating, password, }) => {
    return (React.createElement("div", { className: "auth-box__col" },
        React.createElement(Form, { onSubmit: handleSubmit, noValidate: true },
            React.createElement(FormField, { label: "Email", htmlFor: "email" },
                React.createElement(FormInput, { autoFocus: true, type: "email", name: "email", onChange: handleInputChange, value: email })),
            React.createElement(FormField, { label: "Password", htmlFor: "password" },
                React.createElement(FormInput, { type: "password", name: "password", onChange: handleInputChange, value: password })),
            React.createElement(Button, { disabled: isAnimating, color: "primary", type: "submit" }, "Sign In"))));
};
