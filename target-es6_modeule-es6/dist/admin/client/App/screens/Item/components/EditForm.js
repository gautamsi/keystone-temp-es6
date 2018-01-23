import * as React from 'react';
import * as moment from 'moment';
import { Form, FormField, FormInput, Grid, ResponsiveText, Button, LoadingButton } from '../../../elemental';
import { Fields } from 'FieldTypes';
import { fade } from '../../../../utils/color';
import { theme } from '../../../../theme';
import { AlertMessages } from '../../../shared/AlertMessages';
import { ConfirmationDialog } from '../../../shared/ConfirmationDialog';
import { FormHeading } from './FormHeading';
import { AltText } from './AltText';
import { FooterBar } from './FooterBar';
import { InvalidFieldType } from '../../../shared/InvalidFieldType';
import { deleteItem } from '../actions';
import { upcase } from '../../../../utils/string';
function getNameFromData(data) {
    if (typeof data === 'object') {
        if (typeof data.first === 'string' && typeof data.last === 'string') {
            return data.first + ' ' + data.last;
        }
        else if (data.id) {
            return data.id;
        }
    }
    return data;
}
function smoothScrollTop() {
    let timeOut;
    if (document.body.scrollTop || document.documentElement.scrollTop) {
        window.scrollBy(0, -50);
        timeOut = setTimeout(smoothScrollTop, 20);
    }
    else {
        clearTimeout(timeOut);
    }
}
export class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            const values = Object.assign({}, this.state.values);
            values[event.path] = event.value;
            this.setState({ values });
        };
        this.toggleDeleteDialog = () => {
            this.setState({
                deleteDialogIsOpen: !this.state.deleteDialogIsOpen,
            });
        };
        this.toggleResetDialog = () => {
            this.setState({
                resetDialogIsOpen: !this.state.resetDialogIsOpen,
            });
        };
        this.handleReset = () => {
            this.setState({
                values: Object.assign({}, this.state.lastValues || this.props.data.fields),
                resetDialogIsOpen: false,
            });
        };
        this.handleDelete = () => {
            const { data } = this.props;
            this.props.dispatch(deleteItem(data.id, this.props.router));
        };
        this.handleKeyFocus = () => {
            const input = this.refs.keyOrIdInput;
            input.select();
        };
        this.updateItem = () => {
            const { data, list } = this.props;
            const editForm = this.refs.editForm;
            const formData = new FormData(editForm);
            // Show loading indicator
            this.setState({
                loading: true,
            });
            list.updateItem(data.id, formData, (err, data) => {
                smoothScrollTop();
                if (err) {
                    this.setState({
                        alerts: {
                            error: err,
                        },
                        loading: false,
                    });
                }
                else {
                    // Success, display success flash messages, replace values
                    // TODO: Update key value
                    this.setState({
                        alerts: {
                            success: {
                                success: 'Your changes have been saved successfully',
                            },
                        },
                        lastValues: this.state.values,
                        values: data.fields,
                        loading: false,
                    });
                }
            });
        };
        this.state = {
            values: Object.assign({}, this.props.data.fields),
            confirmationDialog: null,
            loading: false,
            lastValues: null,
            focusFirstField: !this.props.list.nameField && !this.props.list.nameFieldIsFormHeader,
        };
    }
    componentDidMount() {
        this.__isMounted = true;
    }
    componentWillUnmount() {
        this.__isMounted = false;
    }
    getFieldProps(field) {
        const props = Object.assign({}, field);
        const alerts = this.state.alerts;
        // Display validation errors inline
        if (alerts && alerts.error && alerts.error.error === 'validation errors') {
            if (alerts.error.detail[field.path]) {
                // NOTE: This won't work yet, as ElementalUI doesn't allow
                // passed in isValid, only invalidates via internal state.
                // PR to fix that: https://github.com/elementalui/elemental/pull/149
                props.isValid = false;
            }
        }
        props.value = this.state.values[field.path];
        props.values = this.state.values;
        props.onChange = this.handleChange;
        props.mode = 'edit';
        return props;
    }
    removeConfirmationDialog() {
        this.setState({
            confirmationDialog: null,
        });
    }
    renderKeyOrId() {
        let className = 'EditForm__key-or-id';
        let list = this.props.list;
        if (list.nameField && list.autokey && this.props.data[list.autokey.path]) {
            return (React.createElement("div", { className: className },
                React.createElement(AltText, { modified: "ID:", normal: `${upcase(list.autokey.path)}: `, title: "Press <alt> to reveal the ID", className: "EditForm__key-or-id__label" }),
                React.createElement(AltText, { modified: React.createElement("input", { ref: "keyOrIdInput", onFocus: this.handleKeyFocus, value: this.props.data.id, className: "EditForm__key-or-id__input", readOnly: true }), normal: React.createElement("input", { ref: "keyOrIdInput", onFocus: this.handleKeyFocus, value: this.props.data[list.autokey.path], className: "EditForm__key-or-id__input", readOnly: true }), title: "Press <alt> to reveal the ID", className: "EditForm__key-or-id__field" })));
        }
        else if (list.autokey && this.props.data[list.autokey.path]) {
            return (React.createElement("div", { className: className },
                React.createElement("span", { className: "EditForm__key-or-id__label" },
                    list.autokey.path,
                    ": "),
                React.createElement("div", { className: "EditForm__key-or-id__field" },
                    React.createElement("input", { ref: "keyOrIdInput", onFocus: this.handleKeyFocus, value: this.props.data[list.autokey.path], className: "EditForm__key-or-id__input", readOnly: true }))));
        }
        else if (list.nameField) {
            return (React.createElement("div", { className: className },
                React.createElement("span", { className: "EditForm__key-or-id__label" }, "ID: "),
                React.createElement("div", { className: "EditForm__key-or-id__field" },
                    React.createElement("input", { ref: "keyOrIdInput", onFocus: this.handleKeyFocus, value: this.props.data.id, className: "EditForm__key-or-id__input", readOnly: true }))));
        }
    }
    renderNameField() {
        let nameField = this.props.list.nameField;
        let nameFieldIsFormHeader = this.props.list.nameFieldIsFormHeader;
        let wrapNameField = field => (React.createElement("div", { className: "EditForm__name-field" }, field));
        if (nameFieldIsFormHeader) {
            let nameFieldProps = this.getFieldProps(nameField);
            nameFieldProps.label = null;
            nameFieldProps.size = 'full';
            nameFieldProps.autoFocus = true;
            nameFieldProps.inputProps = {
                className: 'item-name-field',
                placeholder: nameField.label,
                size: 'large',
            };
            return wrapNameField(React.createElement(Fields[nameField.type], nameFieldProps));
        }
        else {
            return wrapNameField(React.createElement("h2", null, this.props.data.name || '(no name)'));
        }
    }
    renderFormElements() {
        let headings = 0;
        return this.props.list.uiElements.map((el, index) => {
            // Don't render the name field if it is the header since it'll be rendered in BIG above
            // the list. (see renderNameField method, this is the reverse check of the one it does)
            if (this.props.list.nameField
                && el.field === this.props.list.nameField.path
                && this.props.list.nameFieldIsFormHeader)
                return;
            if (el.type === 'heading') {
                headings++;
                el.options.values = this.state.values;
                el.key = 'h-' + headings;
                return React.createElement(FormHeading, el);
            }
            if (el.type === 'field') {
                let field = this.props.list.fields[el.field];
                let props = this.getFieldProps(field);
                if (typeof Fields[field.type] !== 'function') {
                    return React.createElement(InvalidFieldType, { type: field.type, path: field.path, key: field.path });
                }
                props.key = field.path;
                if (index === 0 && this.state.focusFirstField) {
                    props.autoFocus = true;
                }
                return React.createElement(Fields[field.type], props);
            }
        }, this);
    }
    renderFooterBar() {
        if (this.props.list.noedit && this.props.list.nodelete) {
            return null;
        }
        const { loading } = this.state;
        const loadingButtonText = loading ? 'Saving' : 'Save';
        // Padding must be applied inline so the FooterBar can determine its
        // innerHeight at runtime. Aphrodite's styling comes later...
        return (React.createElement(FooterBar, { style: styles.footerbar },
            React.createElement("div", { style: styles.footerbarInner },
                !this.props.list.noedit && (React.createElement(LoadingButton, { color: "primary", disabled: loading, loading: loading, onClick: this.updateItem, "data-button": "update" }, loadingButtonText)),
                !this.props.list.noedit && (React.createElement(Button, { disabled: loading, onClick: this.toggleResetDialog, variant: "link", color: "cancel", "data-button": "reset" },
                    React.createElement(ResponsiveText, { hiddenXS: "reset changes", visibleXS: "reset" }))),
                !this.props.list.nodelete && (React.createElement(Button, { disabled: loading, onClick: this.toggleDeleteDialog, variant: "link", color: "delete", style: styles.deleteButton, "data-button": "delete" },
                    React.createElement(ResponsiveText, { hiddenXS: `delete ${this.props.list.singular.toLowerCase()}`, visibleXS: "delete" }))))));
    }
    renderTrackingMeta() {
        // TODO: These fields are visible now, so we don't want this. We may revisit
        // it when we have more granular control over hiding fields in certain
        // contexts, so I'm leaving this code here as a reference for now - JW
        if (true)
            return null; // if (true) prevents unreachable code linter errpr
        if (!this.props.list.tracking)
            return null;
        let elements = [];
        let data = {};
        if (this.props.list.tracking.createdAt) {
            data.createdAt = this.props.data.fields[this.props.list.tracking.createdAt];
            if (data.createdAt) {
                elements.push(React.createElement(FormField, { key: "createdAt", label: "Created on" },
                    React.createElement(FormInput, { noedit: true, title: moment(data.createdAt).format('DD/MM/YYYY h:mm:ssa') }, moment(data.createdAt).format('Do MMM YYYY'))));
            }
        }
        if (this.props.list.tracking.createdBy) {
            data.createdBy = this.props.data.fields[this.props.list.tracking.createdBy];
            if (data.createdBy && data.createdBy.name) {
                let createdByName = getNameFromData(data.createdBy.name);
                if (createdByName) {
                    elements.push(React.createElement(FormField, { key: "createdBy", label: "Created by" },
                        React.createElement(FormInput, { noedit: true },
                            data.createdBy.name.first,
                            " ",
                            data.createdBy.name.last)));
                }
            }
        }
        if (this.props.list.tracking.updatedAt) {
            data.updatedAt = this.props.data.fields[this.props.list.tracking.updatedAt];
            if (data.updatedAt && (!data.createdAt || data.createdAt !== data.updatedAt)) {
                elements.push(React.createElement(FormField, { key: "updatedAt", label: "Updated on" },
                    React.createElement(FormInput, { noedit: true, title: moment(data.updatedAt).format('DD/MM/YYYY h:mm:ssa') }, moment(data.updatedAt).format('Do MMM YYYY'))));
            }
        }
        if (this.props.list.tracking.updatedBy) {
            data.updatedBy = this.props.data.fields[this.props.list.tracking.updatedBy];
            if (data.updatedBy && data.updatedBy.name) {
                let updatedByName = getNameFromData(data.updatedBy.name);
                if (updatedByName) {
                    elements.push(React.createElement(FormField, { key: "updatedBy", label: "Updated by" },
                        React.createElement(FormInput, { noedit: true },
                            data.updatedBy.name.first,
                            " ",
                            data.updatedBy.name.last)));
                }
            }
        }
        return Object.keys(elements).length ? (React.createElement("div", { className: "EditForm__meta" },
            React.createElement("h3", { className: "form-heading" }, "Meta"),
            elements)) : null;
    }
    render() {
        return (React.createElement("form", { ref: "editForm", className: "EditForm-container" },
            (this.state.alerts) ? React.createElement(AlertMessages, { alerts: this.state.alerts }) : null,
            React.createElement(Grid.Row, null,
                React.createElement(Grid.Col, { large: "three-quarters" },
                    React.createElement(Form, { layout: "horizontal", component: "div" },
                        this.renderNameField(),
                        this.renderKeyOrId(),
                        this.renderFormElements(),
                        this.renderTrackingMeta())),
                React.createElement(Grid.Col, { large: "one-quarter" },
                    React.createElement("span", null))),
            this.renderFooterBar(),
            React.createElement(ConfirmationDialog, { confirmationLabel: "Reset", isOpen: this.state.resetDialogIsOpen, onCancel: this.toggleResetDialog, onConfirmation: this.handleReset },
                React.createElement("p", null,
                    "Reset your changes to ",
                    React.createElement("strong", null, this.props.data.name),
                    "?")),
            React.createElement(ConfirmationDialog, { confirmationLabel: "Delete", isOpen: this.state.deleteDialogIsOpen, onCancel: this.toggleDeleteDialog, onConfirmation: this.handleDelete },
                "Are you sure you want to delete ",
                React.createElement("strong", null,
                    this.props.data.name,
                    "?"),
                React.createElement("br", null),
                React.createElement("br", null),
                "This cannot be undone.")));
    }
}
EditForm.displayName = 'EditForm';
const styles = {
    footerbar: {
        backgroundColor: fade(theme.color.body, 93),
        boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.1)',
        paddingBottom: 20,
        paddingTop: 20,
        zIndex: 99,
    },
    footerbarInner: {
        height: theme.component.height,
    },
    deleteButton: {
        float: 'right',
    },
};
