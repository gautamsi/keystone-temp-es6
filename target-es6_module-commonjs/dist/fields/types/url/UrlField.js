"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class UrlField extends FieldBase_1.FieldBase {
    constructor() {
        super(...arguments);
        this.openValue = () => {
            let href = this.props.value;
            if (!href)
                return;
            if (!/^(mailto\:)|(\w+\:\/\/)/.test(href)) {
                href = 'http://' + href;
            }
            window.open(href);
        };
    }
    renderLink() {
        if (!this.props.value)
            return null;
        return (React.createElement(elemental_1.GlyphButton, { className: "keystone-relational-button", glyph: "link", onClick: this.openValue, title: 'Open ' + this.props.value + ' in a new tab', variant: "link" }));
    }
    renderField() {
        return (React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", type: "url", value: this.props.value }));
    }
    wrapField() {
        return (React.createElement("div", { style: { position: 'relative' } },
            this.renderField(),
            this.renderLink()));
    }
    renderValue() {
        const { value } = this.props;
        return (React.createElement(elemental_1.FormInput, { noedit: true, onClick: value ? this.openValue : undefined }, value));
    }
}
UrlField.displayName = 'URLField';
UrlField.type = 'Url';
exports.UrlField = UrlField;
