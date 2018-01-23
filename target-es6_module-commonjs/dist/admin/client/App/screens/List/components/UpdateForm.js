"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_select_1 = require("react-select");
const react_dom_1 = require("react-dom");
const FieldTypes_1 = require("FieldTypes");
const InvalidFieldType_1 = require("../../../shared/InvalidFieldType");
const string_1 = require("../../../../utils/string");
const elemental_1 = require("../../../elemental");
class UpdateForm extends React.Component {
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
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
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
            if (typeof FieldTypes_1.Fields[field.type] !== 'function') {
                formFields.push(React.createElement(InvalidFieldType_1.InvalidFieldType, { type: field.type, path: field.path, key: field.path }));
                return;
            }
            let fieldProps = this.getFieldProps(field);
            if (!focusRef) {
                fieldProps.ref = focusRef = 'focusTarget';
            }
            formFields.push(React.createElement(FieldTypes_1.Fields[field.type], fieldProps));
        });
        const fieldsUI = formFields.length ? formFields : (React.createElement(elemental_1.BlankState, { heading: "Choose a field above to begin", style: { padding: '3em 2em' } }));
        return (React.createElement("div", { style: { borderTop: '1px dashed rgba(0,0,0,0.1)', marginTop: 20, paddingTop: 20 } }, fieldsUI));
    }
    renderForm() {
        const { itemIds, list } = this.props;
        const itemCount = string_1.plural(itemIds, ('* ' + list.singular), ('* ' + list.plural));
        const formAction = `${Keystone.adminPath}/${list.path}`;
        return (React.createElement(elemental_1.Form, { layout: "horizontal", action: formAction, noValidate: "true" },
            React.createElement(elemental_1.ModalHeader, { onClose: this.handleClose, showCloseButton: true, text: 'Update ' + itemCount }),
            React.createElement(elemental_1.ModalBody, null,
                React.createElement(react_select_1.default, { key: "field-select", multi: true, onChange: this.updateOptions, options: this.getOptions(), ref: "initialFocusTarget", value: this.state.fields }),
                this.renderFields()),
            React.createElement(elemental_1.ModalFooter, null,
                React.createElement(elemental_1.Button, { color: "primary", type: "submit" }, "Update"),
                React.createElement(elemental_1.Button, { color: "cancel", variant: "link", onClick: this.handleClose }, "Cancel"))));
    }
    render() {
        return (React.createElement(elemental_1.ModalDialog, { isOpen: this.props.isOpen, onClose: this.handleClose, backdropClosesModal: true }, this.renderForm()));
    }
}
UpdateForm.displayName = 'UpdateForm';
exports.UpdateForm = UpdateForm;
