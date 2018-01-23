import * as React from 'react';
import { FormInput } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
/*
    TODO:
    - gravatar
    - validate email address
 */
export class EmailField extends FieldBase {
    renderField() {
        return (React.createElement(FormInput, { name: this.getInputName(this.props.path), ref: "focusTarget", value: this.props.value, onChange: this.valueChanged, autoComplete: "off", type: "email" }));
    }
    renderValue() {
        return this.props.value ? (React.createElement(FormInput, { noedit: true, component: "a", href: 'mailto:' + this.props.value }, this.props.value)) : (React.createElement(FormInput, { noedit: true }));
    }
}
EmailField.displayName = 'EmailField';
EmailField.type = 'Email';
