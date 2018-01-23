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
const FormLabel_1 = require("../FormLabel");
class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.formFieldId = generateId();
    }
    getChildContext() {
        return {
            formFieldId: this.formFieldId,
        };
    }
    render() {
        const { formLayout = 'basic', labelWidth } = this.context;
        const _a = this.props, { cssStyles, children, className, cropLabel, htmlFor, label, offsetAbsentLabel } = _a, props = __rest(_a, ["cssStyles", "children", "className", "cropLabel", "htmlFor", "label", "offsetAbsentLabel"]);
        props['className'] = glamor_1.css(styles_1.default.FormField, styles_1.default['FormField--form-layout-' + formLayout], offsetAbsentLabel ? styles_1.default['FormField--offset-absent-label'] : null, cssStyles);
        if (className) {
            props['className'] += (' ' + className);
        }
        if (offsetAbsentLabel && labelWidth) {
            props['style'] = Object.assign({ paddingLeft: labelWidth }, props.style);
        }
        // elements
        const componentLabel = label ? (React.createElement(FormLabel_1.FormLabel, { htmlFor: htmlFor, cropText: cropLabel }, label)) : null;
        return (React.createElement("div", Object.assign({}, props, { htmlFor: htmlFor }),
            componentLabel,
            children));
    }
}
FormField.contextTypes = {
    formLayout: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
    labelWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
FormField.childContextTypes = {
    formFieldId: PropTypes.string,
};
exports.FormField = FormField;
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
