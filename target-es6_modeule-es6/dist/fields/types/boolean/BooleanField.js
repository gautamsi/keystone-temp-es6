import * as React from 'react';
import { FieldBase } from '../FieldBase';
import { Checkbox } from '../../components/Checkbox';
import { FormField } from '../../../admin/client/App/elemental';
const NOOP = () => { };
export class BooleanField extends FieldBase {
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
            React.createElement(FormField, { offsetAbsentLabel: indent },
                React.createElement("label", { style: { height: '2.3em' } },
                    this.renderFormInput(),
                    React.createElement(Checkbox, { checked: value, onChange: (this.shouldRenderField() && this.valueChanged) || NOOP, readonly: !this.shouldRenderField() }),
                    React.createElement("span", { style: { marginLeft: '.75em' } }, label)),
                this.renderNote())));
    }
}
BooleanField.displayName = 'BooleanField';
BooleanField.type = 'Boolean';
