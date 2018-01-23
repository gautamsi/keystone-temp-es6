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
const React = require("react");
class ExplorerRow extends React.Component {
    getChildContext() {
        return {
            isCollapsed: this.props.isCollapsed,
        };
    }
    render() {
        const _a = this.props, { className, gutter, isCollapsed, style = {} } = _a, incidentalProps = __rest(_a, ["className", "gutter", "isCollapsed", "style"]);
        const __style__ = isCollapsed ? style : Object.assign({ display: 'flex', flexWrap: 'wrap', marginLeft: gutter * -1, marginRight: gutter * -1 }, style);
        const __className__ = 'ExplorerRow' + (className
            ? ' ' + className
            : '');
        return (React.createElement("div", Object.assign({}, incidentalProps, { className: __className__, style: __style__ })));
    }
    static get defaultProps() {
        return { gutter: 10 };
    }
}
exports.ExplorerRow = ExplorerRow;
