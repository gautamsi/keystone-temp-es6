import * as React from 'react';
import Select from 'react-select';
import { FormInput } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
/**
 * TODO:
 * - Custom path support
 */
export class SelectField extends FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = (newValue) => {
            // TODO: This should be natively handled by the Select component
            if (this.props.numeric && typeof newValue === 'string') {
                newValue = newValue ? Number(newValue) : undefined;
            }
            this.props.onChange({
                path: this.props.path,
                value: newValue,
            });
        };
    }
    renderValue() {
        const { ops, value } = this.props;
        const selected = ops.find(opt => opt.value === value);
        return (React.createElement(FormInput, { noedit: true }, selected ? selected.label : null));
    }
    renderField() {
        const { numeric, ops, path, value: val } = this.props;
        // TODO: This should be natively handled by the Select component
        const options = (numeric)
            ? ops.map(function (i) {
                return { label: i.label, value: String(i.value) };
            })
            : ops;
        const value = (typeof val === 'number')
            ? String(val)
            : val;
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", style: { position: 'absolute', width: 1, height: 1, zIndex: -1, opacity: 0 }, tabIndex: -1 }),
            React.createElement(Select, { simpleValue: true, name: this.getInputName(path), value: value, options: options, onChange: this.valueChanged })));
    }
}
SelectField.displayName = 'SelectField';
SelectField.type = 'Select';
