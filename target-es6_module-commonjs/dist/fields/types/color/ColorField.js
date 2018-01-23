"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_color_1 = require("react-color");
const glamor_1 = require("glamor");
const FieldBase_1 = require("../FieldBase");
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const transparent_swatch_1 = require("./transparent-swatch");
const theme_1 = require("../../../admin/client/theme");
class ColorField extends FieldBase_1.FieldBase {
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
        const className = `${glamor_1.css(classes.swatch)} e2e-type-color__swatch`;
        return (this.props.value) ? (React.createElement("span", { className: className, style: { backgroundColor: this.props.value } })) : (React.createElement("span", { className: className, dangerouslySetInnerHTML: { __html: transparent_swatch_1.transparentSwatch } }));
    }
    renderField() {
        const { displayColorPicker } = this.state;
        return (React.createElement("div", { className: "e2e-type-color__wrapper", style: { position: 'relative' } },
            React.createElement(elemental_1.InputGroup, null,
                React.createElement(elemental_1.InputGroupSection, { grow: true },
                    React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "field", value: this.props.value })),
                React.createElement(elemental_1.InputGroupSection, null,
                    React.createElement(elemental_1.Button, { onClick: this.handleClick, cssStyles: classes.button, "data-e2e-type-color__button": true }, this.renderSwatch()))),
            displayColorPicker && (React.createElement("div", null,
                React.createElement("div", { className: `${glamor_1.css(classes.blockout)}`, "data-e2e-type-color__blockout": true, onClick: this.handleClose }),
                React.createElement("div", { className: `${glamor_1.css(classes.popover)}`, onClick: e => e.stopPropagation(), "data-e2e-type-color__popover": true },
                    React.createElement(react_color_1.SketchPicker, { color: this.props.value, onChangeComplete: this.handlePickerChange, onClose: this.handleClose }))))));
    }
}
ColorField.displayName = 'ColorField';
ColorField.type = 'Color';
exports.ColorField = ColorField;
/* eslint quote-props: ["error", "as-needed"] */
const classes = {
    button: {
        background: 'white',
        padding: 4,
        width: theme_1.theme.component.height,
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
