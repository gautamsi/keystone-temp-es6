/**
 * The global Footer, displays a link to the website and the current Keystone
 * version in use
 */
import * as React from 'react';
import { css } from 'glamor';
import { Container } from '../../elemental';
import { theme } from '../../../theme';
export class Footer extends React.Component {
    // Render the user
    renderUser() {
        const { User, user } = this.props;
        if (!user)
            return null;
        return (React.createElement("span", null,
            React.createElement("span", null, " Signed in as "),
            React.createElement("a", { href: `${Keystone.adminPath}/${User.path}/${user.id}`, tabIndex: -1, className: `${css(classes.link)}` }, user.name),
            React.createElement("span", null, ".")));
    }
    render() {
        const { backUrl, brand, appversion, version } = this.props;
        return (React.createElement("footer", { className: `${css(classes.footer)}`, "data-keystone-footer": true },
            React.createElement(Container, null,
                React.createElement("a", { href: backUrl, tabIndex: -1, className: `${css(classes.link)}` }, brand + (appversion ? (' ' + appversion) : '')),
                React.createElement("span", null, " powered by "),
                React.createElement("a", { href: "http://keystonejs.com", target: "_blank", className: `${css(classes.link)}`, tabIndex: -1 }, "KeystoneJS"),
                React.createElement("span", null,
                    " version ",
                    version,
                    "."),
                this.renderUser())));
    }
}
Footer.displayName = 'Footer';
/* eslint quote-props: ["error", "as-needed"] */
const linkHoverAndFocus = {
    color: theme.color.gray60,
    outline: 'none',
};
const classes = {
    footer: {
        boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
        color: theme.color.gray40,
        fontSize: theme.font.size.small,
        paddingBottom: 30,
        paddingTop: 40,
        textAlign: 'center',
    },
    link: {
        color: theme.color.gray60,
        ':hover': linkHoverAndFocus,
        ':focus': linkHoverAndFocus,
    },
};
