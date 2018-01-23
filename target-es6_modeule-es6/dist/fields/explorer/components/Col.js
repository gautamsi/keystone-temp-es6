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
export const ExplorerCol = (props, context) => {
    const { className, gutter, style = {}, width } = props, incidentalProps = __rest(props, ["className", "gutter", "style", "width"]);
    const { isCollapsed } = context;
    const __style__ = isCollapsed ? style : Object.assign({ flex: width ? null : '1 1 0', minHeight: 1, paddingLeft: gutter, paddingRight: gutter, width: width || '100%' }, style);
    const __className__ = 'ExplorerCol' + (className
        ? ' ' + className
        : '');
    return (React.createElement("div", Object.assign({}, incidentalProps, { className: __className__, style: __style__ })));
};
ExplorerCol.defaultProps = {
    gutter: 10,
};
