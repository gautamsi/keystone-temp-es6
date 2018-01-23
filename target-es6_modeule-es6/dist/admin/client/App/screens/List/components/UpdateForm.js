import * as React from 'react';
import Select from 'react-select';
import { findDOMNode } from 'react-dom';
import { Fields } from 'FieldTypes';
import { InvalidFieldType } from '../../../shared/InvalidFieldType';
import { plural } from '../../../../utils/string';
import { BlankState, Button, Form, ModalDialog, ModalBody, ModalFooter, ModalHeader } from '../../../elemental';
export class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.getOptions = () => {
            const { fields } = this.props.list;
            return Object.keys(fields).map(key => ({ value: fields[key].path, label: fields[key].label }));
        };
        this.updateOptions = (fields) => {
            this.setState({
                fields: fields,
            }, this.doFocus);
        };
        this.handleClose = () => {
            this.setState({
                fields: [],
            });
            this.props.onCancel();
        };
        this.state = {
            fields: [],
        };
    }
    static get defaultProps() {
        return {
            isOpen: false,
        };
    }
    componentDidMount() {
        this.doFocus();
    }
    componentDidUpdate() {
        this.doFocus();
    }
    doFocus() {
        if (this.refs.focusTarget) {
            findDOMNode(this.refs.focusTarget).focus();
        }
    }
    getFieldProps(field) {
        let props = Object.assign({}, field);
        props.value = this.state.fields[field.path];
        props.values = this.state.fields;
        props.onChange = this.handleChange;
        props.mode = 'create';
        props.key = field.path;
        return props;
    }
    handleChange(value) {
        console.log('handleChange:', value);
    }
    renderFields() {
        const { list } = this.props;
        const { fields } = this.state;
        const formFields = [];
        let focusRef;
        fields.forEach((fieldOption) => {
            const field = list.fields[fieldOption.value];
            if (typeof Fields[field.type] !== 'function') {
                formFields.push(React.createElement(InvalidFieldType, { type: field.type, path: field.path, key: field.path }));
                return;
            }
            let fieldProps = this.getFieldProps(field);
            if (!focusRef) {
                fieldProps.ref = focusRef = 'focusTarget';
            }
            formFields.push(React.createElement(Fields[field.type], fieldProps));
        });
        const fieldsUI = formFields.length ? formFields : (React.createElement(BlankState, { heading: "Choose a field above to begin", style: { padding: '3em 2em' } }));
        return (React.createElement("div", { style: { borderTop: '1px dashed rgba(0,0,0,0.1)', marginTop: 20, paddingTop: 20 } }, fieldsUI));
    }
    renderForm() {
        const { itemIds, list } = this.props;
        const itemCount = plural(itemIds, ('* ' + list.singular), ('* ' + list.plural));
        const formAction = `${Keystone.adminPath}/${list.path}`;
        return (React.createElement(Form, { layout: "horizontal", action: formAction, noValidate: "true" },
            React.createElement(ModalHeader, { onClose: this.handleClose, showCloseButton: true, text: 'Update ' + itemCount }),
            React.createElement(ModalBody, null,
                React.createElement(Select, { key: "field-select", multi: true, onChange: this.updateOptions, options: this.getOptions(), ref: "initialFocusTarget", value: this.state.fields }),
                this.renderFields()),
            React.createElement(ModalFooter, null,
                React.createElement(Button, { color: "primary", type: "submit" }, "Update"),
                React.createElement(Button, { color: "cancel", variant: "link", onClick: this.handleClose }, "Cancel"))));
    }
    render() {
        return (React.createElement(ModalDialog, { isOpen: this.props.isOpen, onClose: this.handleClose, backdropClosesModal: true }, this.renderForm()));
    }
}
UpdateForm.displayName = 'UpdateForm';
