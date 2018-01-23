"use strict";
/**
 * A mobile section
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ListItem_1 = require("./ListItem");
const react_router_dom_1 = require("react-router-dom");
class MobileSectionItem extends React.Component {
    // Render the lists
    renderLists() {
        if (!this.props.lists || this.props.lists.length <= 1)
            return null;
        const navLists = this.props.lists.map((item) => {
            // Get the link and the classname
            const href = item.external ? item.path : `${Keystone.adminPath}/${item.path}`;
            const className = (this.props.currentListKey && this.props.currentListKey === item.path) ? 'MobileNavigation__list-item is-active' : 'MobileNavigation__list-item';
            return (React.createElement(ListItem_1.MobileListItem, { key: item.path, href: href, className: className, onClick: this.props.onClick }, item.label));
        });
        return (React.createElement("div", { className: "MobileNavigation__lists" }, navLists));
    }
    render() {
        return (React.createElement("div", { className: this.props.className },
            React.createElement(react_router_dom_1.Link, { className: "MobileNavigation__section-item", to: this.props.href, tabIndex: -1, onClick: this.props.onClick }, this.props.children),
            this.renderLists()));
    }
}
MobileSectionItem.displayName = 'MobileSectionItem';
exports.MobileSectionItem = MobileSectionItem;
