"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class PasswordField extends FieldBase_1.FieldBase {
    constructor(props) {
        super(props);
        this.valueChanged = (which, event) => {
            let newState = {};
            newState[which] = event.target.value;
            this.setState(newState);
        };
        this.showChangeUI = () => {
            this.setState({
                showChangeUI: true,
            }, () => this.focus());
        };
        this.onCancel = () => {
            this.setState({
                showChangeUI: false,
            }, () => this.focus());
        };
        this.state = Object.assign({ passwordIsSet: this.props.value ? true : false, showChangeUI: this.props.mode === 'create' ? true : false, password: '', confirm: '' }, this.state);
    }
    renderValue() {
        return React.createElement(elemental_1.FormInput, { noedit: true }, this.props.value ? 'Password Set' : '');
    }
    renderField() {
        return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
    }
    renderFields() {
        return (React.createElement(elemental_1.InputGroup, { block: true },
            React.createElement(elemental_1.InputGroupSection, { grow: true },
                React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged.bind(this, 'password'), placeholder: "New password", ref: "focusTarget", type: "password", value: this.state.password })),
            React.createElement(elemental_1.InputGroupSection, { grow: true },
                React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.paths.confirm), onChange: this.valueChanged.bind(this, 'confirm'), placeholder: "Confirm new password", value: this.state.confirm, type: "password" })),
            this.state.passwordIsSet ? (React.createElement(elemental_1.InputGroupSection, null,
                React.createElement(elemental_1.Button, { onClick: this.onCancel }, "Cancel"))) : null));
    }
    renderChangeButton() {
        let label = this.state.passwordIsSet
            ? 'Change Password'
            : 'Set Password';
        return (React.createElement(elemental_1.Button, { ref: "focusTarget", onClick: this.showChangeUI }, label));
    }
}
PasswordField.displayName = 'PasswordField';
PasswordField.type = 'Password';
exports.PasswordField = PasswordField;
