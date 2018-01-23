import * as React from 'react';
import { GlyphButton, FormInput } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
export class UrlField extends FieldBase {
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
        return (React.createElement(GlyphButton, { className: "keystone-relational-button", glyph: "link", onClick: this.openValue, title: 'Open ' + this.props.value + ' in a new tab', variant: "link" }));
    }
    renderField() {
        return (React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "focusTarget", type: "url", value: this.props.value }));
    }
    wrapField() {
        return (React.createElement("div", { style: { position: 'relative' } },
            this.renderField(),
            this.renderLink()));
    }
    renderValue() {
        const { value } = this.props;
        return (React.createElement(FormInput, { noedit: true, onClick: value ? this.openValue : undefined }, value));
    }
}
UrlField.displayName = 'URLField';
UrlField.type = 'Url';
