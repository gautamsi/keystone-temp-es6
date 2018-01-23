"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FieldBase_1 = require("../FieldBase");
const Checkbox_1 = require("../../components/Checkbox");
const elemental_1 = require("../../../admin/client/App/elemental");
const NOOP = () => { };
class BooleanField extends FieldBase_1.FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = (value) => {
            this.props.onChange({
                path: this.props.path,
                value: value,
            });
        };
    }
    renderFormInput() {
        if (!this.shouldRenderField())
            return;
        return (React.createElement("input", { name: this.getInputName(this.props.path), type: "hidden", value: `${!!this.props.value}` }));
    }
    renderUI() {
        const { indent, value, label, path } = this.props;
        return (React.createElement("div", { "data-field-name": path, "data-field-type": "boolean" },
            React.createElement(elemental_1.FormField, { offsetAbsentLabel: indent },
                React.createElement("label", { style: { height: '2.3em' } },
                    this.renderFormInput(),
                    React.createElement(Checkbox_1.Checkbox, { checked: value, onChange: (this.shouldRenderField() && this.valueChanged) || NOOP, readonly: !this.shouldRenderField() }),
                    React.createElement("span", { style: { marginLeft: '.75em' } }, label)),
                this.renderNote())));
    }
}
BooleanField.displayName = 'BooleanField';
BooleanField.type = 'Boolean';
exports.BooleanField = BooleanField;
