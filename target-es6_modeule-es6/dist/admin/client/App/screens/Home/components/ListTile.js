import * as React from 'react';
import { Link } from 'react-router-dom';
/**
 * Displays information about a list and lets you create a new one.
 */
export class ListTile extends React.Component {
    render() {
        let opts = {
            'data-list-path': this.props.path,
        };
        return (React.createElement("div", Object.assign({ className: "dashboard-group__list" }, opts),
            React.createElement("span", { className: "dashboard-group__list-inner" },
                React.createElement(Link, { to: this.props.href, className: "dashboard-group__list-tile" },
                    React.createElement("div", { className: "dashboard-group__list-label" }, this.props.label),
                    React.createElement("div", { className: "dashboard-group__list-count" }, this.props.spinner || this.props.count)),
                (!this.props.hideCreateButton) && (React.createElement(Link, { to: this.props.href + '?create', className: "dashboard-group__list-create octicon octicon-plus", title: "Create", tabIndex: -1 })))));
    }
}
