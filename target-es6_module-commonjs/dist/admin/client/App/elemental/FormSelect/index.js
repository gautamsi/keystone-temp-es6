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
class FormSelect extends React.Component {
    render() {
        const _a = this.props, { children, id, options } = _a, props = __rest(_a, ["children", "id", "options"]);
        const { formFieldId } = this.context;
        props['className'] = glamor_1.css(styles_1.default.select, props.disabled ? styles_1.default['select--disabled'] : null);
        props['id'] = id || formFieldId;
        // Property Violation
        if (options && children) {
            console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
        }
        return (React.createElement("div", { className: `${glamor_1.css(styles_1.default.container)}` },
            options ? (React.createElement("select", Object.assign({}, props), options.map(opt => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))) : React.createElement("select", Object.assign({}, props), children),
            React.createElement("span", { className: `${glamor_1.css(styles_1.default.arrows, props.disabled ? styles_1.default['arrows--disabled'] : null)}` },
                React.createElement("span", { className: `${glamor_1.css(styles_1.default.arrow, styles_1.default.arrowTop)}` }),
                React.createElement("span", { className: `${glamor_1.css(styles_1.default.arrow, styles_1.default.arrowBottom)}` }))));
    }
}
FormSelect.contextTypes = {
    formFieldId: PropTypes.string,
};
exports.FormSelect = FormSelect;
