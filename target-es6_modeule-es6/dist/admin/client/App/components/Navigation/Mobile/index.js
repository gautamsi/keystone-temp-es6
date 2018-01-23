/**
 * The mobile navigation, displayed on screens < 768px
 */
import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { MobileSectionItem } from './SectionItem';
const ESCAPE_KEY_CODE = 27;
export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            this.setState({
                barIsVisible: window.innerWidth < 768,
            });
        };
        // Toggle the menu
        this.toggleMenu = () => {
            this[this.state.menuIsVisible ? 'hideMenu' : 'showMenu']();
        };
        // If the escape key was pressed, hide the menu
        this.handleEscapeKey = (event) => {
            if (event.which === ESCAPE_KEY_CODE) {
                this.hideMenu();
            }
        };
        // Render the sidebar menu
        this.renderMenu = () => {
            if (!this.state.menuIsVisible)
                return () => null;
            return (React.createElement("nav", { className: "MobileNavigation__menu" },
                React.createElement("div", { className: "MobileNavigation__sections" }, this.renderNavigation())));
        };
        this.state = {
            barIsVisible: false,
        };
        this.handleResize = this.handleResize.bind(this);
        this.handleEscapeKey = this.handleEscapeKey.bind(this);
    }
    // Handle showing and hiding the menu based on the window size when
    // resizing
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    // Show the menu
    showMenu() {
        this.setState({
            menuIsVisible: true,
        });
        // Make the body unscrollable, so you can only scroll in the menu
        document.body.style.overflow = 'hidden';
        document.body.addEventListener('keyup', this.handleEscapeKey, false);
    }
    // Hide the menu
    hideMenu() {
        this.setState({
            menuIsVisible: false,
        });
        // Make the body scrollable again
        document.body.style.overflow = null;
        document.body.removeEventListener('keyup', this.handleEscapeKey, false);
    }
    renderNavigation() {
        if (!this.props.sections || !this.props.sections.length)
            return null;
        return this.props.sections.map((section) => {
            // Get the link and the classname
            const href = section.lists[0].external ? section.lists[0].path : `${Keystone.adminPath}/${section.lists[0].path}`;
            const className = (this.props.currentSectionKey && this.props.currentSectionKey === section.key) ? 'MobileNavigation__section is-active' : 'MobileNavigation__section';
            // Render a SectionItem
            return (React.createElement(MobileSectionItem, { key: section.key, className: className, href: href, lists: section.lists, currentListKey: this.props.currentListKey, onClick: this.toggleMenu }, section.label));
        });
    }
    // Render a blockout
    renderBlockout() {
        if (!this.state.menuIsVisible)
            () => null;
        return React.createElement("div", { className: "MobileNavigation__blockout", onClick: this.toggleMenu });
    }
    render() {
        if (!this.state.barIsVisible)
            return null;
        return (React.createElement("div", { className: "MobileNavigation" },
            React.createElement("div", { className: "MobileNavigation__bar" },
                React.createElement("button", { type: "button", onClick: this.toggleMenu, className: "MobileNavigation__bar__button MobileNavigation__bar__button--menu" },
                    React.createElement("span", { className: 'MobileNavigation__bar__icon octicon octicon-' + (this.state.menuIsVisible ? 'x' : 'three-bars') })),
                React.createElement("span", { className: "MobileNavigation__bar__label" }, this.props.brand),
                React.createElement("a", { href: this.props.signoutUrl, className: "MobileNavigation__bar__button MobileNavigation__bar__button--signout" },
                    React.createElement("span", { className: "MobileNavigation__bar__icon octicon octicon-sign-out" }))),
            React.createElement("div", { className: "MobileNavigation__bar--placeholder" }),
            React.createElement(Transition, { classNames: "MobileNavigation__menu", timeout: 260 }, this.renderMenu()),
            React.createElement(Transition, { classNames: "react-transitiongroup-fade", timeout: 0 }, this.renderBlockout())));
    }
}
MobileNavigation.displayName = 'MobileNavigation';
