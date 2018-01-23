"use strict";
/*
TODO: this file has been left as a reference for the new File type field.
Some features here, including size formatting and icons, may be ported across.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const bytes_1 = require("bytes");
const Field = require("../Field");
const React = require("react");
const elemental_1 = require("elemental");
const ICON_EXTS = [
    'aac', 'ai', 'aiff', 'avi', 'bmp', 'c', 'cpp', 'css', 'dat', 'dmg', 'doc', 'dotx', 'dwg', 'dxf', 'eps', 'exe', 'flv', 'gif', 'h',
    'hpp', 'html', 'ics', 'iso', 'java', 'jpg', 'js', 'key', 'less', 'mid', 'mp3', 'mp4', 'mpg', 'odf', 'ods', 'odt', 'otp', 'ots',
    'ott', 'pdf', 'php', 'png', 'ppt', 'psd', 'py', 'qt', 'rar', 'rb', 'rtf', 'sass', 'scss', 'sql', 'tga', 'tgz', 'tiff', 'txt',
    'wav', 'xls', 'xlsx', 'xml', 'yml', 'zip',
];
let LocalFilesFieldItem = React.createClass({
    propTypes: {
        deleted: React.PropTypes.bool,
        filename: React.PropTypes.string,
        isQueued: React.PropTypes.bool,
        size: React.PropTypes.number,
        toggleDelete: React.PropTypes.func,
    },
    renderActionButton() {
        if (!this.props.shouldRenderActionButton || this.props.isQueued)
            return null;
        let buttonLabel = this.props.deleted ? 'Undo' : 'Remove';
        let buttonType = this.props.deleted ? 'link' : 'link-cancel';
        return React.createElement(elemental_1.Button, { key: "action-button", type: buttonType, onClick: this.props.toggleDelete }, buttonLabel);
    },
    render() {
        const { filename } = this.props;
        const ext = filename.split('.').pop();
        let iconName = '_blank';
        if (_.includes(ICON_EXTS, ext))
            iconName = ext;
        let note;
        if (this.props.deleted) {
            note = React.createElement(elemental_1.FormInput, { key: "delete-note", noedit: true, className: "field-type-localfiles__note field-type-localfiles__note--delete" }, "save to delete");
        }
        else if (this.props.isQueued) {
            note = React.createElement(elemental_1.FormInput, { key: "upload-note", noedit: true, className: "field-type-localfiles__note field-type-localfiles__note--upload" }, "save to upload");
        }
        return (React.createElement(elemental_1.FormField, null,
            React.createElement("img", { key: "file-type-icon", className: "file-icon", src: Keystone.adminPath + '/images/icons/32/' + iconName + '.png' }),
            React.createElement(elemental_1.FormInput, { key: "file-name", noedit: true, className: "field-type-localfiles__filename" },
                filename,
                this.props.size ? ' (' + bytes_1.default(this.props.size) + ')' : null),
            note,
            this.renderActionButton()));
    },
});
let tempId = 0;
exports.LocalFilesField = Field.create({
    getInitialState() {
        let items = [];
        let self = this;
        _.forEach(this.props.value, function (item) {
            self.pushItem(item, items);
        });
        return { items: items };
    },
    removeItem(id) {
        let thumbs = [];
        let self = this;
        _.forEach(this.state.items, function (thumb) {
            let newProps = Object.assign({}, thumb.props);
            if (thumb.props._id === id) {
                newProps.deleted = !thumb.props.deleted;
            }
            self.pushItem(newProps, thumbs);
        });
        this.setState({ items: thumbs });
    },
    pushItem(args, thumbs) {
        thumbs = thumbs || this.state.items;
        args.toggleDelete = this.removeItem.bind(this, args._id);
        args.shouldRenderActionButton = this.shouldRenderField();
        args.adminPath = Keystone.adminPath;
        thumbs.push(React.createElement(LocalFilesFieldItem, Object.assign({ key: args._id || tempId++ }, args)));
    },
    fileFieldNode() {
        return this.refs.fileField;
    },
    renderFileField() {
        return React.createElement("input", { ref: "fileField", type: "file", name: this.props.paths.upload, multiple: true, className: "field-upload", onChange: this.uploadFile, tabIndex: "-1" });
    },
    clearFiles() {
        this.fileFieldNode().value = '';
        this.setState({
            items: this.state.items.filter(function (thumb) {
                return !thumb.props.isQueued;
            }),
        });
    },
    uploadFile(event) {
        let self = this;
        let files = event.target.files;
        _.forEach(files, function (f) {
            self.pushItem({ isQueued: true, filename: f.name });
            self.forceUpdate();
        });
    },
    changeFiles() {
        this.fileFieldNode().click();
    },
    hasFiles() {
        return this.refs.fileField && this.fileFieldNode().value;
    },
    renderToolbar() {
        if (!this.shouldRenderField())
            return null;
        let clearFilesButton;
        if (this.hasFiles()) {
            clearFilesButton = React.createElement(elemental_1.Button, { type: "link-cancel", className: "ml-5", onClick: this.clearFiles }, "Clear Uploads");
        }
        return (React.createElement("div", { className: "files-toolbar" },
            React.createElement(elemental_1.Button, { onClick: this.changeFiles }, "Upload"),
            clearFilesButton));
    },
    renderPlaceholder() {
        return (React.createElement("div", { className: "file-field file-upload", onClick: this.changeFiles },
            React.createElement("div", { className: "file-preview" },
                React.createElement("span", { className: "file-thumbnail" },
                    React.createElement("span", { className: "file-dropzone" }),
                    React.createElement("div", { className: "ion-picture file-uploading" }))),
            React.createElement("div", { className: "file-details" },
                React.createElement("span", { className: "file-message" }, "Click to upload"))));
    },
    renderContainer() {
        return (React.createElement("div", { className: "files-container clearfix" }, this.state.items));
    },
    renderFieldAction() {
        let value = '';
        let remove = [];
        _.forEach(this.state.items, function (thumb) {
            if (thumb && thumb.props.deleted)
                remove.push(thumb.props._id);
        });
        if (remove.length)
            value = 'delete:' + remove.join(',');
        return React.createElement("input", { ref: "action", className: "field-action", type: "hidden", value: value, name: this.props.paths.action });
    },
    renderUploadsField() {
        return React.createElement("input", { ref: "uploads", className: "field-uploads", type: "hidden", name: this.props.paths.uploads });
    },
    renderNote: function () {
        if (!this.props.note)
            return null;
        return React.createElement(elemental_1.FormNote, { html: this.props.note });
    },
    renderUI() {
        return (React.createElement(elemental_1.FormField, { label: this.props.label, className: "field-type-localfiles", htmlFor: this.props.path },
            this.renderFieldAction(),
            this.renderUploadsField(),
            this.renderFileField(),
            this.renderContainer(),
            this.renderToolbar(),
            this.renderNote()));
    },
});
//# sourceMappingURL=LocalFilesField.js.map