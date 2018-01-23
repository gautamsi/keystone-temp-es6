"use strict";
/**
 * Renders a logo, defaulting to the Keystone logo if no brand is specified in
 * the configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Brand = function (props) {
    // Default to the KeystoneJS logo
    let logo = { src: `${Keystone.adminPath}/images/logo.png`, width: 205, height: 68 };
    if (props.logo) {
        // If the logo is set to a string, it's a direct link
        logo = typeof props.logo === 'string' ? { src: props.logo } : props.logo;
        // Optionally one can specify the logo as an array, also stating the
        // wanted width and height of the logo
        // TODO: Deprecate this
        if (Array.isArray(logo)) {
            logo = { src: logo[0], width: logo[1], height: logo[2] };
        }
    }
    return (React.createElement("div", { className: "auth-box__col" },
        React.createElement("div", { className: "auth-box__brand" },
            React.createElement("a", { href: "/", className: "auth-box__brand__logo" },
                React.createElement("img", { src: logo.src, width: logo.width ? logo.width : null, height: logo.height ? logo.height : null, alt: props.brand })))));
};