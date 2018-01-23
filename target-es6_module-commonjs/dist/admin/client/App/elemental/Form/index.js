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
const PropTypes = require("prop-types");
const styles_1 = require("./styles");
class Form extends React.Component {
    static get defaultProps() {
        return {
            component: 'form',
            layout: 'basic',
        };
    }
    getChildContext() {
        return {
            formLayout: this.props.layout,
            labelWidth: this.props.labelWidth,
        };
    }
    render() {
        // NOTE `labelWidth` is declared to remove it from `props`, though never used
        const _a = this.props, { className, component: Component, labelWidth, // eslint-disable-line no-unused-vars
        layout } = _a, props = __rest(_a, ["className", "component", "labelWidth", "layout"]);
        props['className'] = glamor_1.css(styles_1.default.Form, styles_1.default['Form__' + layout], className);
        return React.createElement(Component, Object.assign({}, props));
    }
}
Form.childContextTypes = {
    formLayout: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
    labelWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
exports.Form = Form;
