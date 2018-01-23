/**
 * A navigation item of the secondary navigation
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
export class SecondaryNavItem extends React.Component {
    render() {
        return (React.createElement("li", { className: this.props.className, "data-list-path": this.props.path },
            React.createElement(Link, { to: this.props.href, onClick: this.props.onClick, title: this.props.title, tabIndex: -1 }, this.props.children)));
    }
}
SecondaryNavItem.displayName = 'SecondaryNavItem';
