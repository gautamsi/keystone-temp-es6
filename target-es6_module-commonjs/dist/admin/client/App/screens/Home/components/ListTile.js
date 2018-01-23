"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
/**
 * Displays information about a list and lets you create a new one.
 */
class ListTile extends React.Component {
    render() {
        let opts = {
            'data-list-path': this.props.path,
        };
        return (React.createElement("div", Object.assign({ className: "dashboard-group__list" }, opts),
            React.createElement("span", { className: "dashboard-group__list-inner" },
                React.createElement(react_router_dom_1.Link, { to: this.props.href, className: "dashboard-group__list-tile" },
                    React.createElement("div", { className: "dashboard-group__list-label" }, this.props.label),
                    React.createElement("div", { className: "dashboard-group__list-count" }, this.props.spinner || this.props.count)),
                (!this.props.hideCreateButton) && (React.createElement(react_router_dom_1.Link, { to: this.props.href + '?create', className: "dashboard-group__list-create octicon octicon-plus", title: "Create", tabIndex: -1 })))));
    }
}
exports.ListTile = ListTile;
