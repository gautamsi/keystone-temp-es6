"use strict";
/**
 * A list item of the mobile navigation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class MobileListItem extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.Link, { className: this.props.className, to: this.props.href, onClick: this.props.onClick, tabIndex: -1 }, this.props.children));
    }
}
MobileListItem.displayName = 'MobileListItem';
exports.MobileListItem = MobileListItem;
