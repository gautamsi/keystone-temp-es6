"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elemental_1 = require("../../../admin/client/App/elemental");
const React = require("react");
const FieldBase_1 = require("../FieldBase");
class MoneyField extends FieldBase_1.FieldBase {
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
        return (React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", value: this.props.value }));
    }
}
MoneyField.displayName = 'MoneyField';
MoneyField.type = 'Money';
exports.MoneyField = MoneyField;
