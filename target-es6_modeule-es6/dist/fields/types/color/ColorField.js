import { SketchPicker } from 'react-color';
import { css } from 'glamor';
import { FieldBase } from '../FieldBase';
import * as React from 'react';
import { Button, FormInput, InputGroup as Group, InputGroupSection as Section, } from '../../../admin/client/App/elemental';
import { transparentSwatch } from './transparent-swatch';
import { theme } from '../../../admin/client/theme';
export class ColorField extends FieldBase {
    constructor(props) {
        super(props);
        this.handleInputChange = (event) => {
            let newValue = event.target.value;
            if (/^([0-9A-F]{3}){1,2}$/.test(newValue)) {
                newValue = '#' + newValue;
            }
            if (newValue === this.props.value)
                return;
            this.updateValue(newValue);
        };
        this.handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker });
        };
        this.handleClose = () => {
            this.setState({ displayColorPicker: false });
        };
        this.handlePickerChange = (color) => {
            let newValue = color.hex;
            if (newValue === this.props.value)
                return;
            this.updateValue(newValue);
        };
        this.state = {
            displayColorPicker: false,
        };
    }
    updateValue(value) {
        this.props.onChange({
            path: this.props.path,
            value: value,
        });
    }
    renderSwatch() {
        const className = `${css(classes.swatch)} e2e-type-color__swatch`;
        return (this.props.value) ? (React.createElement("span", { className: className, style: { backgroundColor: this.props.value } })) : (React.createElement("span", { className: className, dangerouslySetInnerHTML: { __html: transparentSwatch } }));
    }
    renderField() {
        const { displayColorPicker } = this.state;
        return (React.createElement("div", { className: "e2e-type-color__wrapper", style: { position: 'relative' } },
            React.createElement(Group, null,
                React.createElement(Section, { grow: true },
                    React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "field", value: this.props.value })),
                React.createElement(Section, null,
                    React.createElement(Button, { onClick: this.handleClick, cssStyles: classes.button, "data-e2e-type-color__button": true }, this.renderSwatch()))),
            displayColorPicker && (React.createElement("div", null,
                React.createElement("div", { className: `${css(classes.blockout)}`, "data-e2e-type-color__blockout": true, onClick: this.handleClose }),
                React.createElement("div", { className: `${css(classes.popover)}`, onClick: e => e.stopPropagation(), "data-e2e-type-color__popover": true },
                    React.createElement(SketchPicker, { color: this.props.value, onChangeComplete: this.handlePickerChange, onClose: this.handleClose }))))));
    }
}
ColorField.displayName = 'ColorField';
ColorField.type = 'Color';
/* eslint quote-props: ["error", "as-needed"] */
const classes = {
    button: {
        background: 'white',
        padding: 4,
        width: theme.component.height,
        ':hover': {
            background: 'white',
        },
    },
    blockout: {
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    popover: {
        marginTop: 10,
        position: 'absolute',
        left: 0,
        zIndex: 2,
    },
    swatch: {
        borderRadius: 1,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        display: 'block',
        height: '100%',
        width: '100%',
    },
};
