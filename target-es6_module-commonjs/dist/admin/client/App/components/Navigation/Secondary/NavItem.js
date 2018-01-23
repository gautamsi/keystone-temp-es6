"use strict";
/**
 * A navigation item of the secondary navigation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class SecondaryNavItem extends React.Component {
    render() {
        return (React.createElement("li", { className: this.props.className, "data-list-path": this.props.path },
            React.createElement(react_router_dom_1.Link, { to: this.props.href, onClick: this.props.onClick, title: this.props.title, tabIndex: -1 }, this.props.children)));
    }
}
SecondaryNavItem.displayName = 'SecondaryNavItem';
exports.SecondaryNavItem = SecondaryNavItem;
