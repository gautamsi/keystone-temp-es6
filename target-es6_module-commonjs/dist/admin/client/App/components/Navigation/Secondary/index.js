"use strict";
/**
 * The secondary navigation links to inidvidual lists of a section
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const elemental_1 = require("../../../elemental");
const active_1 = require("../../../screens/List/actions/active");
const NavItem_1 = require("./NavItem");
class SecondaryNavigationNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            this.setState({
                navIsVisible: this.props.lists && Object.keys(this.props.lists).length > 0 && window.innerWidth >= 768,
            });
        };
        this.state = {};
        this.handleResize = this.handleResize.bind(this);
    }
    // Handle resizing and hide this nav on mobile (i.e. < 768px) screens
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    // Render the navigation
    renderNavigation(lists) {
        const navigation = Object.keys(lists).map((key) => {
            const list = lists[key];
            // Get the link and the classname
            const href = list.external ? list.path : `${Keystone.adminPath}/${list.path}`;
            const isActive = this.props.currentListKey && this.props.currentListKey === list.path;
            const className = isActive ? 'active' : null;
            const onClick = (evt) => {
                // If it's the currently active navigation item and we're not on the item view,
                // clear the query params on click
                if (isActive && !this.props.itemId) {
                    evt.preventDefault();
                    this.props.dispatch(active_1.setActiveList(this.props.currentList, this.props.currentListKey));
                }
            };
            return (React.createElement(NavItem_1.SecondaryNavItem, { key: list.path, path: list.path, className: className, href: href, onClick: onClick }, list.label));
        });
        return (React.createElement("ul", { className: "app-nav app-nav--secondary app-nav--left" }, navigation));
    }
    render() {
        if (!this.state.navIsVisible)
            return null;
        return (React.createElement("nav", { className: "secondary-navbar" },
            React.createElement(elemental_1.Container, { clearFloatingChildren: true }, this.renderNavigation(this.props.lists))));
    }
}
SecondaryNavigationNav.displayName = 'SecondaryNavigation';
exports.SecondaryNavigation = react_redux_1.connect((state) => {
    return {
        currentList: state.lists.currentList,
    };
})(SecondaryNavigationNav);
