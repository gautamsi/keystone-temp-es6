"use strict";
/**
 * The global Footer, displays a link to the website and the current Keystone
 * version in use
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamor_1 = require("glamor");
const elemental_1 = require("../../elemental");
const theme_1 = require("../../../theme");
class Footer extends React.Component {
    // Render the user
    renderUser() {
        const { User, user } = this.props;
        if (!user)
            return null;
        return (React.createElement("span", null,
            React.createElement("span", null, " Signed in as "),
            React.createElement("a", { href: `${Keystone.adminPath}/${User.path}/${user.id}`, tabIndex: -1, className: `${glamor_1.css(classes.link)}` }, user.name),
            React.createElement("span", null, ".")));
    }
    render() {
        const { backUrl, brand, appversion, version } = this.props;
        return (React.createElement("footer", { className: `${glamor_1.css(classes.footer)}`, "data-keystone-footer": true },
            React.createElement(elemental_1.Container, null,
                React.createElement("a", { href: backUrl, tabIndex: -1, className: `${glamor_1.css(classes.link)}` }, brand + (appversion ? (' ' + appversion) : '')),
                React.createElement("span", null, " powered by "),
                React.createElement("a", { href: "http://keystonejs.com", target: "_blank", className: `${glamor_1.css(classes.link)}`, tabIndex: -1 }, "KeystoneJS"),
                React.createElement("span", null,
                    " version ",
                    version,
                    "."),
                this.renderUser())));
    }
}
Footer.displayName = 'Footer';
exports.Footer = Footer;
/* eslint quote-props: ["error", "as-needed"] */
const linkHoverAndFocus = {
    color: theme_1.theme.color.gray60,
    outline: 'none',
};
const classes = {
    footer: {
        boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
        color: theme_1.theme.color.gray40,
        fontSize: theme_1.theme.font.size.small,
        paddingBottom: 30,
        paddingTop: 40,
        textAlign: 'center',
    },
    link: {
        color: theme_1.theme.color.gray60,
        ':hover': linkHoverAndFocus,
        ':focus': linkHoverAndFocus,
    },
};
