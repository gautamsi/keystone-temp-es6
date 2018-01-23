import * as React from 'react';
import { FormInput } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
export class TextareaField extends FieldBase {
    renderValue() {
        const { height } = this.props;
        const styles = {
            height: height,
            whiteSpace: 'pre-wrap',
            overflowY: 'auto',
        };
        return (React.createElement(FormInput, { multiline: true, noedit: true, style: styles }, this.props.value));
    }
    renderField() {
        const { height, path, style, value } = this.props;
        const styles = Object.assign({ height: height }, style);
        return (React.createElement(FormInput, { autoComplete: "off", multiline: true, name: this.getInputName(path), onChange: this.valueChanged, ref: "focusTarget", style: styles, value: value }));
    }
}
TextareaField.displayName = 'TextareaField';
TextareaField.type = 'Textarea';
