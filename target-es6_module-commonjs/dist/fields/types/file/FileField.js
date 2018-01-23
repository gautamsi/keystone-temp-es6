"use strict";
/**
TODO:
- Format size of stored file (if present) using bytes package?
- Display file type icon? (see LocalFileField)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FileChangeMessage_1 = require("../../components/FileChangeMessage");
const HiddenFileInput_1 = require("../../components/HiddenFileInput");
const FieldBase_1 = require("../FieldBase");
let uploadInc = 1000;
const buildInitialState = (props) => ({
    action: null,
    removeExisting: false,
    uploadFieldPath: `File-${props.path}-${++uploadInc}`,
    userSelectedFile: null,
});
class FileField extends FieldBase_1.FieldBase {
    constructor(props) {
        super(props);
        // ==============================
        // HELPERS
        // ==============================
        this.hasFile = () => {
            return this.hasExisting() || !!this.state.userSelectedFile;
        };
        this.getFilename = () => {
            return this.state.userSelectedFile
                ? this.state.userSelectedFile.name
                : this.props.value.filename;
        };
        // ==============================
        // METHODS
        // ==============================
        this.triggerFileBrowser = () => {
            this.refs.fileInput.clickDomNode();
        };
        this.handleFileChange = (event) => {
            const userSelectedFile = event.target.files[0];
            this.setState({
                userSelectedFile: userSelectedFile,
            });
        };
        this.handleRemove = (e) => {
            let state = {};
            if (this.state.userSelectedFile) {
                state = buildInitialState(this.props);
            }
            else if (this.hasExisting()) {
                state.removeExisting = true;
                if (this.props.autoCleanup) {
                    if (e.altKey) {
                        state.action = 'reset';
                    }
                    else {
                        state.action = 'delete';
                    }
                }
                else {
                    if (e.altKey) {
                        state.action = 'delete';
                    }
                    else {
                        state.action = 'reset';
                    }
                }
            }
            this.setState(state);
        };
        this.undoRemove = () => {
            this.setState(buildInitialState(this.props));
        };
        this.state = Object.assign({}, buildInitialState(this.props), this.state);
    }
    static getDefaultValue() {
        return {};
    }
    shouldCollapse() {
        return this.props.collapse && !this.hasExisting();
    }
    componentWillUpdate(nextProps) {
        // Show the new filename when it's finished uploading
        if (this.props.value.filename !== nextProps.value.filename) {
            this.setState(buildInitialState(nextProps));
        }
    }
    hasExisting() {
        return this.props.value && !!this.props.value.filename;
    }
    // ==============================
    // RENDERERS
    // ==============================
    renderFileNameAndChangeMessage() {
        const href = this.props.value ? this.props.value.url : undefined;
        return (React.createElement("div", null,
            (this.hasFile() && !this.state.removeExisting) ? (React.createElement(FileChangeMessage_1.FileChangeMessage, { component: href ? 'a' : 'span', href: href, target: "_blank" }, this.getFilename())) : null,
            this.renderChangeMessage()));
    }
    renderChangeMessage() {
        if (this.state.userSelectedFile) {
            return (React.createElement(FileChangeMessage_1.FileChangeMessage, { color: "success" }, "Save to Upload"));
        }
        else if (this.state.removeExisting) {
            return (React.createElement(FileChangeMessage_1.FileChangeMessage, { color: "danger" },
                "File ",
                this.props.autoCleanup ? 'deleted' : 'removed',
                " - save to confirm"));
        }
        else {
            return null;
        }
    }
    renderClearButton() {
        if (this.state.removeExisting) {
            return (React.createElement(elemental_1.Button, { variant: "link", onClick: this.undoRemove }, "Undo Remove"));
        }
        else {
            let clearText;
            if (this.state.userSelectedFile) {
                clearText = 'Cancel Upload';
            }
            else {
                clearText = (this.props.autoCleanup ? 'Delete File' : 'Remove File');
            }
            return (React.createElement(elemental_1.Button, { variant: "link", color: "cancel", onClick: this.handleRemove }, clearText));
        }
    }
    renderActionInput() {
        // If the user has selected a file for uploading, we need to point at
        // the upload field. If the file is being deleted, we submit that.
        if (this.state.userSelectedFile || this.state.action) {
            const value = this.state.userSelectedFile
                ? `upload:${this.state.uploadFieldPath}`
                : (this.state.action === 'delete' ? 'remove' : '');
            return (React.createElement("input", { name: this.getInputName(this.props.path), type: "hidden", value: value }));
        }
        else {
            return null;
        }
    }
    renderUI() {
        const { label, note, path } = this.props;
        const buttons = (React.createElement("div", { style: this.hasFile() ? { marginTop: '1em' } : null },
            React.createElement(elemental_1.Button, { onClick: this.triggerFileBrowser },
                this.hasFile() ? 'Change' : 'Upload',
                " File"),
            this.hasFile() && this.renderClearButton()));
        return (React.createElement("div", { "data-field-name": path, "data-field-type": "file" },
            React.createElement(elemental_1.FormField, { label: label, htmlFor: path },
                this.shouldRenderField() ? (React.createElement("div", null,
                    this.hasFile() && this.renderFileNameAndChangeMessage(),
                    buttons,
                    React.createElement(HiddenFileInput_1.HiddenFileInput, { key: this.state.uploadFieldPath, name: this.state.uploadFieldPath, onChange: this.handleFileChange, ref: "fileInput" }),
                    this.renderActionInput())) : (React.createElement("div", null, this.hasFile()
                    ? this.renderFileNameAndChangeMessage()
                    : React.createElement(elemental_1.FormInput, { noedit: true }, "no file"))),
                !!note && React.createElement(elemental_1.FormNote, { html: note }))));
    }
}
FileField.displayName = 'FileField';
FileField.type = 'File';
exports.FileField = FileField;
