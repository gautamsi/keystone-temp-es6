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
export const Container = (_a) => {
    var { clearFloatingChildren, component: Component, width } = _a, props = __rest(_a, ["clearFloatingChildren", "component", "width"]);
    props.className = css(classes.container, classes[width], clearFloatingChildren ? classes.clearfix : null, props.className);
    return React.createElement(Component, Object.assign({}, props));
};
Container.defaultProps = {
    component: 'div',
    width: 'large',
};
