"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const ImageThumbnail_1 = require("../../components/ImageThumbnail");
const NestedFormField_1 = require("../../components/NestedFormField");
const FieldBase_1 = require("../FieldBase");
class EmbedlyField extends FieldBase_1.FieldBase {
    static getDefaultValue() {
        return {};
    }
    // always defers to renderValue; there is no form UI for this field
    renderField() {
        return this.renderValue();
    }
    renderValue(path, label, multiline) {
        return (React.createElement(NestedFormField_1.NestedFormField, { key: path, label: label },
            React.createElement(elemental_1.FormInput, { noedit: true, multiline: multiline }, this.props.value[path])));
    }
    renderAuthor() {
        if (!this.props.value.authorName)
            return;
        return (React.createElement(NestedFormField_1.NestedFormField, { key: "author", label: "Author" },
            React.createElement(elemental_1.FormInput, { noedit: true, href: this.props.value.authorUrl && this.props.value.authorUrl, target: "_blank" }, this.props.value.authorName)));
    }
    renderDimensions() {
        if (!this.props.value.width || !this.props.value.height)
            return;
        return (React.createElement(NestedFormField_1.NestedFormField, { key: "dimensions", label: "Dimensions" },
            React.createElement(elemental_1.FormInput, { noedit: true },
                this.props.value.width,
                " \u00D7 ",
                this.props.value.height,
                "px")));
    }
    renderPreview() {
        if (!this.props.value.thumbnailUrl)
            return;
        let image = React.createElement("img", { width: this.props.value.thumbnailWidth, height: this.props.value.thumbnailHeight, src: this.props.value.thumbnailUrl });
        let preview = this.props.value.url ? (React.createElement(ImageThumbnail_1.ImageThumbnail, { component: "a", href: this.props.value.url, target: "_blank" }, image)) : (React.createElement(ImageThumbnail_1.ImageThumbnail, null, image));
        return (React.createElement(NestedFormField_1.NestedFormField, { label: "Preview" }, preview));
    }
    renderUI() {
        if (!this.props.value.exists) {
            return (React.createElement(elemental_1.FormField, { label: this.props.label },
                React.createElement(elemental_1.FormInput, { noedit: true }, "(not set)")));
        }
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, { key: "provider", label: this.props.label },
                React.createElement(elemental_1.FormInput, { noedit: true },
                    this.props.value.providerName,
                    " ",
                    this.props.value.type)),
            this.renderValue('title', 'Title'),
            this.renderAuthor(),
            this.renderValue('description', 'Description', true),
            this.renderPreview(),
            this.renderDimensions()));
    }
}
EmbedlyField.displayName = 'EmbedlyField';
EmbedlyField.type = 'Embedly';
exports.EmbedlyField = EmbedlyField;
