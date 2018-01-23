"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class NumberField extends FieldBase_1.FieldBase {
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
        return (React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", value: this.props.value }));
    }
}
NumberField.displayName = 'NumberField';
NumberField.type = 'Number';
exports.NumberField = NumberField;
