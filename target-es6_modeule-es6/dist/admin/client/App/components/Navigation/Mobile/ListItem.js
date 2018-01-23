/**
 * A list item of the mobile navigation
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
export class MobileListItem extends React.Component {
    render() {
        return (React.createElement(Link, { className: this.props.className, to: this.props.href, onClick: this.props.onClick, tabIndex: -1 }, this.props.children));
    }
}
MobileListItem.displayName = 'MobileListItem';
