"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
/*
    TODO:
    - gravatar
    - validate email address
 */
class EmailField extends FieldBase_1.FieldBase {
    renderField() {
        return (React.createElement(elemental_1.FormInput, { name: this.getInputName(this.props.path), ref: "focusTarget", value: this.props.value, onChange: this.valueChanged, autoComplete: "off", type: "email" }));
    }
    renderValue() {
        return this.props.value ? (React.createElement(elemental_1.FormInput, { noedit: true, component: "a", href: 'mailto:' + this.props.value }, this.props.value)) : (React.createElement(elemental_1.FormInput, { noedit: true }));
    }
}
EmailField.displayName = 'EmailField';
EmailField.type = 'Email';
exports.EmailField = EmailField;
