"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = require("glamor");
const React = require("react");
// NOTE: only accepts InlineGroupSection as a single child
exports.InputGroup = (_a) => {
    var { cssStyles, block, children, className, component: Component, contiguous } = _a, props = __rest(_a, ["cssStyles", "block", "children", "className", "component", "contiguous"]);
    // prepare group className
    props['className'] = glamor_1.css(classes.group, !!block && classes.block, cssStyles);
    if (className) {
        props['className'] += (' ' + className);
    }
    // convert children to an array and filter out falsey values
    const buttons = React.Children.toArray(children).filter(i => i);
    // normalize the count
    const count = buttons.length - 1;
    // clone children and apply classNames that glamor can target
    props['children'] = buttons.map((c, idx) => {
        if (!c)
            return null;
        const isOnlyChild = !count;
        const isFirstChild = !isOnlyChild && idx === 0;
        const isLastChild = !isOnlyChild && idx === count;
        const isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;
        let position;
        if (isOnlyChild)
            position = 'only';
        if (isFirstChild)
            position = 'first';
        if (isLastChild)
            position = 'last';
        if (isMiddleChild)
            position = 'middle';
        return React.cloneElement(c, {
            contiguous: contiguous,
            position,
        });
    });
    return React.createElement(Component, Object.assign({}, props));
};
exports.InputGroup.defaultProps = {
    component: 'div',
};
const classes = {
    group: {
        display: 'inline-flex',
    },
    block: {
        display: 'flex',
    },
};
