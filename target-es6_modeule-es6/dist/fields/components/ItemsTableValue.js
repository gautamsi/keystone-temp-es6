var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
export const ItemsTableValue = (_a) => {
    var { component, empty, exterior, field, href, interior, padded, truncate } = _a, props = __rest(_a, ["component", "empty", "exterior", "field", "href", "interior", "padded", "truncate"]);
    // TODO remove in the next release
    if (href) {
        console.warn('ItemsTableValue: `href` will be deprecated in the next release, use `to`.');
    }
    const linkRef = props.to || href;
    const Component = linkRef ? Link : component;
    props.className = `${classnames('ItemList__value', (field ? `ItemList__value--${field}` : null), {
        'ItemList__link--empty': empty,
        'ItemList__link--exterior': linkRef && exterior,
        'ItemList__link--interior': linkRef && interior,
        'ItemList__link--padded': linkRef && padded,
        'ItemList__value--truncate': truncate,
    }, props.className)}`;
    props.to = linkRef;
    return React.createElement(Component, Object.assign({}, props));
};
ItemsTableValue.defaultProps = {
    component: 'div',
    truncate: true,
};
