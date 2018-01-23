"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class TextareaField extends FieldBase_1.FieldBase {
    renderValue() {
        const { height } = this.props;
        const styles = {
            height: height,
            whiteSpace: 'pre-wrap',
            overflowY: 'auto',
        };
        return (React.createElement(elemental_1.FormInput, { multiline: true, noedit: true, style: styles }, this.props.value));
    }
    renderField() {
        const { height, path, style, value } = this.props;
        const styles = Object.assign({ height: height }, style);
        return (React.createElement(elemental_1.FormInput, { autoComplete: "off", multiline: true, name: this.getInputName(path), onChange: this.valueChanged, ref: "focusTarget", style: styles, value: value }));
    }
}
TextareaField.displayName = 'TextareaField';
TextareaField.type = 'Textarea';
exports.TextareaField = TextareaField;
