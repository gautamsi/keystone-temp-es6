"use strict";
/**
 * The primary (i.e. uppermost) navigation on desktop. Renders all sections and
 * the home-, website- and signout buttons.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../elemental");
const NavItem_1 = require("./NavItem");
class PrimaryNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            this.setState({
                navIsVisible: window.innerWidth >= 768,
            });
        };
        this.state = {};
        this.handleResize = this.handleResize.bind(this);
    }
    // Handle resizing, hide this navigation on mobile (i.e. < 768px) screens
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    // Render the sign out button
    renderSignout() {
        if (!this.props.signoutUrl)
            return null;
        return (React.createElement(NavItem_1.PrimaryNavItem, { label: "octicon-sign-out", href: this.props.signoutUrl, title: "Sign Out" },
            React.createElement("span", { className: "octicon octicon-sign-out" })));
    }
    // Render the back button
    renderBackButton() {
        if (!Keystone.backUrl)
            return null;
        return (React.createElement(NavItem_1.PrimaryNavItem, { label: "octicon-globe", href: Keystone.backUrl, title: 'Front page - ' + this.props.brand },
            React.createElement("span", { className: "octicon octicon-globe" })));
    }
    // Render the link to the webpage
    renderFrontLink() {
        return (React.createElement("ul", { className: "app-nav app-nav--primary app-nav--right" },
            this.renderBackButton(),
            this.renderSignout()));
    }
    renderBrand() {
        // TODO: support navbarLogo from keystone config
        const { brand, currentSectionKey } = this.props;
        const className = currentSectionKey === 'dashboard' ? 'primary-navbar__brand primary-navbar__item--active' : 'primary-navbar__brand';
        return (React.createElement(NavItem_1.PrimaryNavItem, { className: className, label: "octicon-home", title: 'Dashboard - ' + brand, to: Keystone.adminPath },
            React.createElement("span", { className: "octicon octicon-home" })));
    }
    // Render the navigation
    renderNavigation() {
        if (!this.props.sections || !this.props.sections.length)
            return null;
        return this.props.sections.map((section) => {
            // Get the link and the class name
            const href = section.lists[0].external ? section.lists[0].path : `${Keystone.adminPath}/${section.lists[0].path}`;
            const isActive = this.props.currentSectionKey && this.props.currentSectionKey === section.key;
            const className = isActive ? 'primary-navbar__item--active' : null;
            return (React.createElement(NavItem_1.PrimaryNavItem, { active: isActive, key: section.key, label: section.label, className: className, to: href }, section.label));
        });
    }
    render() {
        if (!this.state.navIsVisible)
            return null;
        return (React.createElement("nav", { className: "primary-navbar" },
            React.createElement(elemental_1.Container, { clearFloatingChildren: true },
                React.createElement("ul", { className: "app-nav app-nav--primary app-nav--left" },
                    this.renderBrand(),
                    this.renderNavigation()),
                this.renderFrontLink())));
    }
}
exports.PrimaryNavigation = PrimaryNavigation;
