/**
 * A item in the primary navigation. If it has a "to" prop it'll render a
 * react-router "Link", if it has a "href" prop it'll render a simple "a" tag
 */
import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
export const PrimaryNavItem = ({ children, className, href, label, title, to, active }) => {
    const itemClassName = classnames('primary-navbar__item', className);
    const Button = to ? (React.createElement(Link, { className: "primary-navbar__link", key: title, tabIndex: -1, title: title, to: to, 
        // Block clicks on active link
        onClick: (evt) => { if (active)
            evt.preventDefault(); } }, children)) : (React.createElement("a", { className: "primary-navbar__link", href: href, key: title, tabIndex: -1, title: title }, children));
    return (React.createElement("li", { className: itemClassName, "data-section-label": label }, Button));
};
PrimaryNavItem.displayName = 'PrimaryNavItem';
