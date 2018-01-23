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
import { theme } from '../../../theme';
export const BlankState = (_a) => {
    var { children, heading, component: Component } = _a, props = __rest(_a, ["children", "heading", "component"]);
    props.className = css(classes.container, props.className);
    return (React.createElement(Component, Object.assign({}, props),
        !!heading && React.createElement("h2", { "data-e2e-blank-state-heading": true, className: `${css(classes.heading)}` }, heading),
        children));
};
BlankState.defaultProps = {
    component: 'div',
};
/* eslint quote-props: ["error", "as-needed"] */
const classes = {
    container: {
        backgroundColor: theme.blankstate.background,
        borderRadius: theme.blankstate.borderRadius,
        color: theme.blankstate.color,
        paddingBottom: theme.blankstate.paddingVertical,
        paddingLeft: theme.blankstate.paddingHorizontal,
        paddingRight: theme.blankstate.paddingHorizontal,
        paddingTop: theme.blankstate.paddingVertical,
        textAlign: 'center',
    },
    heading: {
        color: 'inherit',
        ':last-child': {
            marginBottom: 0,
        },
    },
};
