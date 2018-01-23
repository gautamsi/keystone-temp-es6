"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateInput_1 = require("../../components/DateInput");
const FieldBase_1 = require("../FieldBase");
const moment = require("moment");
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
/*
TODO: Implement yearRange Prop, or deprecate for max / min values (better)
*/
const DEFAULT_INPUT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_FORMAT_STRING = 'Do MMM YYYY';
class DateField extends FieldBase_1.FieldBase {
    constructor() {
        super(...arguments);
        this.valueChanged = ({ value }) => {
            this.props.onChange({
                path: this.props.path,
                value: value,
            });
        };
        this.setToday = () => {
            this.valueChanged({
                value: this.toMoment(new Date()).format(this.props.inputFormat),
            });
        };
    }
    static get defaultProps() {
        return {
            formatString: DEFAULT_FORMAT_STRING,
            inputFormat: DEFAULT_INPUT_FORMAT,
        };
    }
    toMoment(value) {
        if (this.props.isUTC) {
            return moment.utc(value);
        }
        else {
            return moment(value);
        }
    }
    isValid(value) {
        return this.toMoment(value).isValid();
    }
    format(value) {
        return value ? this.toMoment(value).format(this.props.formatString) : '';
    }
    renderValue() {
        return (React.createElement(elemental_1.FormInput, { noedit: true }, this.format(this.props.value)));
    }
    renderField() {
        let dateAsMoment = this.toMoment(this.props.value);
        let value = this.props.value && dateAsMoment.isValid()
            ? dateAsMoment.format(this.props.inputFormat)
            : this.props.value;
        return (React.createElement(elemental_1.InputGroup, null,
            React.createElement(elemental_1.InputGroupSection, { grow: true },
                React.createElement(DateInput_1.DateInput, { format: this.props.inputFormat, name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "dateInput", value: value })),
            React.createElement(elemental_1.InputGroupSection, null,
                React.createElement(elemental_1.Button, { onClick: this.setToday }, "Today"))));
    }
}
DateField.displayName = 'DateField';
DateField.type = 'Date';
exports.DateField = DateField;
