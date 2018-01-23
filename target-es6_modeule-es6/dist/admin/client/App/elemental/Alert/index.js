var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { css } from 'glamor';
import * as React from 'react';
import classes from './styles';
// clone children if a class exists for the tagname
const cloneWithClassnames = (c) => {
    const type = c.type && c.type.displayName
        ? c.type.displayName
        : c.type || null;
    if (!type || !classes[type])
        return c;
    return React.cloneElement(c, {
        className: css(classes[type]),
    });
};
export const Alert = (_a) => {
    var { children, className, color, component: Component } = _a, props = __rest(_a, ["children", "className", "color", "component"]);
    props['className'] = css(classes.alert, classes[color], className);
    props['children'] = React.Children.map(children, cloneWithClassnames);
    return React.createElement(Component, Object.assign({}, props, { "data-alert-type": color }));
};
Alert.defaultProps = {
    component: 'div',
};
