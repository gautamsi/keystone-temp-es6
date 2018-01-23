"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_select_1 = require("react-select");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
/**
 * TODO:
 * - Custom path support
 */
class SelectField extends FieldBase_1.FieldBase {
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
        return (React.createElement(elemental_1.FormInput, { noedit: true }, selected ? selected.label : null));
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
            React.createElement(react_select_1.default, { simpleValue: true, name: this.getInputName(path), value: value, options: options, onChange: this.valueChanged })));
    }
}
SelectField.displayName = 'SelectField';
SelectField.type = 'Select';
exports.SelectField = SelectField;
