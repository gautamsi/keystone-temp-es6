import * as React from 'react';
import { Button, FormInput, InputGroup as Group, InputGroupSection as Section, } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
export class PasswordField extends FieldBase {
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
        return React.createElement(FormInput, { noedit: true }, this.props.value ? 'Password Set' : '');
    }
    renderField() {
        return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
    }
    renderFields() {
        return (React.createElement(Group, { block: true },
            React.createElement(Section, { grow: true },
                React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged.bind(this, 'password'), placeholder: "New password", ref: "focusTarget", type: "password", value: this.state.password })),
            React.createElement(Section, { grow: true },
                React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.paths.confirm), onChange: this.valueChanged.bind(this, 'confirm'), placeholder: "Confirm new password", value: this.state.confirm, type: "password" })),
            this.state.passwordIsSet ? (React.createElement(Section, null,
                React.createElement(Button, { onClick: this.onCancel }, "Cancel"))) : null));
    }
    renderChangeButton() {
        let label = this.state.passwordIsSet
            ? 'Change Password'
            : 'Set Password';
        return (React.createElement(Button, { ref: "focusTarget", onClick: this.showChangeUI }, label));
    }
}
PasswordField.displayName = 'PasswordField';
PasswordField.type = 'Password';
