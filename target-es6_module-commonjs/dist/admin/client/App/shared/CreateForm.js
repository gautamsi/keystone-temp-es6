"use strict";
/**
 * The form that's visible when "Create <ItemName>" is clicked on either the
 * List screen or the Item screen
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const vkey = require("vkey");
const AlertMessages_1 = require("./AlertMessages");
const FieldTypes_1 = require("FieldTypes");
const InvalidFieldType_1 = require("./InvalidFieldType");
const elemental_1 = require("../elemental");
class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        // Handle input change events
        this.handleChange = (event) => {
            let values = Object.assign({}, this.state.values);
            values[event.path] = event.value;
            this.setState({
                values: values,
            });
        };
        // Create a new item when the form is submitted
        this.submitForm = (event) => {
            event.preventDefault();
            const createForm = event.target;
            const formData = new FormData(createForm);
            this.props.list.createItem(formData, (err, data) => {
                if (data) {
                    if (this.props.onCreate) {
                        this.props.onCreate(data);
                    }
                    else {
                        // Clear form
                        this.setState({
                            values: {},
                            alerts: {
                                success: {
                                    success: 'Item created',
                                },
                            },
                        });
                    }
                }
                else {
                    if (!err) {
                        err = {
                            error: 'connection error',
                        };
                    }
                    // If we get a database error, show the database error message
                    // instead of only saying "Database error"
                    if (err.error === 'database error') {
                        err.error = err.detail.errmsg;
                    }
                    this.setState({
                        alerts: {
                            error: err,
                        },
                    });
                }
            });
        };
        // Set the field values to their default values when first rendering the
        // form. (If they have a default value, that is)
        let values = {};
        Object.keys(this.props.list.fields).forEach(key => {
            let field = this.props.list.fields[key];
            let FieldComponent = FieldTypes_1.Fields[field.type];
            values[field.path] = FieldComponent.getDefaultValue(field);
        });
        this.state = {
            values: values,
            alerts: {},
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    static get defaultProps() {
        return {
            err: null,
            isOpen: false,
        };
    }
    componentDidMount() {
        document.body.addEventListener('keyup', this.handleKeyPress, false);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.handleKeyPress, false);
    }
    handleKeyPress(evt) {
        if (vkey[evt.keyCode] === '<escape>') {
            this.props.onCancel();
        }
    }
    // Set the props of a field
    getFieldProps(field) {
        let props = Object.assign({}, field);
        props.value = this.state.values[field.path];
        props.values = this.state.values;
        props.onChange = this.handleChange;
        props.mode = 'create';
        props.key = field.path;
        return props;
    }
    // Render the form itself
    renderForm() {
        if (!this.props.isOpen)
            return;
        let form = [];
        let list = this.props.list;
        let nameField = this.props.list.nameField;
        let focusWasSet;
        // If the name field is an initial one, we need to render a proper
        // input for it
        if (list.nameIsInitial) {
            let nameFieldProps = this.getFieldProps(nameField);
            nameFieldProps.autoFocus = focusWasSet = true;
            if (nameField.type === 'text') {
                nameFieldProps.className = 'item-name-field';
                nameFieldProps.placeholder = nameField.label;
                nameFieldProps.label = '';
            }
            form.push(React.createElement(FieldTypes_1.Fields[nameField.type], nameFieldProps));
        }
        // Render inputs for all initial fields
        Object.keys(list.initialFields).forEach(key => {
            let field = list.fields[list.initialFields[key]];
            // If there's something weird passed in as field type, render the
            // invalid field type component
            if (typeof FieldTypes_1.Fields[field.type] !== 'function') {
                form.push(React.createElement(InvalidFieldType_1.InvalidFieldType, { type: field.type, path: field.path, key: field.path }));
                return;
            }
            // Get the props for the input field
            let fieldProps = this.getFieldProps(field);
            // If there was no focusRef set previously, set the current field to
            // be the one to be focussed. Generally the first input field, if
            // there's an initial name field that takes precedence.
            if (!focusWasSet) {
                fieldProps.autoFocus = focusWasSet = true;
            }
            form.push(React.createElement(FieldTypes_1.Fields[field.type], fieldProps));
        });
        return (React.createElement(elemental_1.Form, { layout: "horizontal", onSubmit: this.submitForm },
            React.createElement(elemental_1.ModalHeader, { text: 'Create a new ' + list.singular, showCloseButton: true }),
            React.createElement(elemental_1.ModalBody, null,
                React.createElement(AlertMessages_1.AlertMessages, { alerts: this.state.alerts }),
                form),
            React.createElement(elemental_1.ModalFooter, null,
                React.createElement(elemental_1.Button, { color: "success", type: "submit", "data-button-type": "submit" }, "Create"),
                React.createElement(elemental_1.Button, { variant: "link", color: "cancel", "data-button-type": "cancel", onClick: this.props.onCancel }, "Cancel"))));
    }
    render() {
        return (React.createElement(elemental_1.ModalDialog, { isOpen: this.props.isOpen, onClose: this.props.onCancel, backdropClosesModal: true }, this.renderForm()));
    }
}
CreateForm.displayName = 'CreateForm';
exports.CreateForm = CreateForm;
