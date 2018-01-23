"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class NameField extends FieldBase_1.FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = (which, event) => {
            const { value = {}, path, onChange } = this.props;
            onChange({
                path,
                value: Object.assign({}, value, { [which]: event.target.value }),
            });
        };
        this.changeFirst = (event) => {
            return this.valueChanged('first', event);
        };
        this.changeLast = (event) => {
            return this.valueChanged('last', event);
        };
    }
    static getDefaultValue() {
        return {
            first: '',
            last: '',
        };
    }
    renderValue() {
        const inputStyle = { width: '100%' };
        const { value = {} } = this.props;
        return (React.createElement(elemental_1.Grid.Row, { small: "one-half", gutter: 10 },
            React.createElement(elemental_1.Grid.Col, null,
                React.createElement(elemental_1.FormInput, { noedit: true, style: inputStyle }, value.first)),
            React.createElement(elemental_1.Grid.Col, null,
                React.createElement(elemental_1.FormInput, { noedit: true, style: inputStyle }, value.last))));
    }
    renderField() {
        const { value = {}, paths, autoFocus } = this.props;
        return (React.createElement(elemental_1.Grid.Row, { small: "one-half", gutter: 10 },
            React.createElement(elemental_1.Grid.Col, null,
                React.createElement(elemental_1.FormInput, { autoFocus: autoFocus, autoComplete: "off", name: this.getInputName(paths.first), onChange: this.changeFirst, placeholder: "First name", value: value.first })),
            React.createElement(elemental_1.Grid.Col, null,
                React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(paths.last), onChange: this.changeLast, placeholder: "Last name", value: value.last }))));
    }
}
NameField.displayName = 'NameField';
NameField.type = 'Name';
exports.NameField = NameField;
