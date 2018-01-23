import { FormInput } from '../../../admin/client/App/elemental';
import * as React from 'react';
import { FieldBase } from '../FieldBase';
export class MoneyField extends FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = (event) => {
            let newValue = event.target.value.replace(/[^\d\s\,\.\$€£¥]/g, '');
            if (newValue === this.props.value)
                return;
            this.props.onChange({
                path: this.props.path,
                value: newValue,
            });
        };
    }
    renderField() {
        return (React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", value: this.props.value }));
    }
}
MoneyField.displayName = 'MoneyField';
MoneyField.type = 'Money';
