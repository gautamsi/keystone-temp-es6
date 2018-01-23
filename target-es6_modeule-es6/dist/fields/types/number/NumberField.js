import * as React from 'react';
import { FormInput } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
export class NumberField extends FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = (event) => {
            let newValue = event.target.value;
            if (/^-?\d*\.?\d*$/.test(newValue)) {
                this.props.onChange({
                    path: this.props.path,
                    value: newValue,
                });
            }
        };
    }
    renderField() {
        return (React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", value: this.props.value }));
    }
}
NumberField.displayName = 'NumberField';
NumberField.type = 'Number';
