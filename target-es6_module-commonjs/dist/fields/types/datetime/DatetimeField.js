"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateInput_1 = require("../../components/DateInput");
const moment = require("moment");
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class DatetimeField extends FieldBase_1.FieldBase {
    constructor(props) {
        super(props);
        this.focusTargetRef = 'dateInput';
        // default input formats
        this.dateInputFormat = 'YYYY-MM-DD';
        this.timeInputFormat = 'h:mm:ss a';
        this.tzOffsetInputFormat = 'Z';
        this.handleChange = (dateValue, timeValue, tzOffsetValue) => {
            let value = dateValue + ' ' + timeValue;
            let datetimeFormat = this.dateInputFormat + ' ' + this.timeInputFormat;
            // if the change included a timezone offset, include that in the calculation (so NOW works correctly during DST changes)
            if (typeof tzOffsetValue !== 'undefined') {
                value += ' ' + tzOffsetValue;
                datetimeFormat += ' ' + this.tzOffsetInputFormat;
            }
            else {
                this.setState({ tzOffsetValue: this.moment(value, datetimeFormat).format(this.tzOffsetInputFormat) });
            }
            this.props.onChange({
                path: this.props.path,
                value: this.isValid(value) ? this.moment(value, datetimeFormat).toISOString() : null,
            });
        };
        this.dateChanged = ({ value }) => {
            this.setState({ dateValue: value });
            this.handleChange(value, this.state.timeValue);
        };
        this.timeChanged = (evt) => {
            this.setState({ timeValue: evt.target.value });
            this.handleChange(this.state.dateValue, evt.target.value);
        };
        this.setNow = () => {
            let dateValue = this.moment().format(this.dateInputFormat);
            let timeValue = this.moment().format(this.timeInputFormat);
            let tzOffsetValue = this.moment().format(this.tzOffsetInputFormat);
            this.setState({
                dateValue: dateValue,
                timeValue: timeValue,
                tzOffsetValue: tzOffsetValue,
            });
            this.handleChange(dateValue, timeValue, tzOffsetValue);
        };
        this.state = Object.assign({ dateValue: this.props.value && this.moment(this.props.value).format(this.dateInputFormat), timeValue: this.props.value && this.moment(this.props.value).format(this.timeInputFormat), tzOffsetValue: this.props.value ? this.moment(this.props.value).format(this.tzOffsetInputFormat) : this.moment().format(this.tzOffsetInputFormat) }, this.state);
    }
    static get defaultProps() {
        let props = FieldBase_1.FieldBase.defaultProps;
        return Object.assign({ formatString: 'Do MMM YYYY, h:mm:ss a' }, props);
    }
    moment(...args) {
        if (this.props.isUTC)
            return moment.utc.apply(moment, arguments);
        else
            return moment.apply(undefined, arguments);
    }
    // TODO: Move isValid() so we can share with server-side code
    isValid(value) {
        return this.moment(value, this.parseFormats).isValid();
    }
    // TODO: Move format() so we can share with server-side code
    format(value, format) {
        format = format || this.dateInputFormat + ' ' + this.timeInputFormat;
        return value ? this.moment(value).format(format) : '';
    }
    renderNote() {
        if (!this.props.note)
            return null;
        return React.createElement(elemental_1.FormNote, { note: this.props.note });
    }
    renderUI() {
        let input;
        if (this.shouldRenderField()) {
            input = (React.createElement("div", null,
                React.createElement(elemental_1.InputGroup, null,
                    React.createElement(elemental_1.InputGroupSection, { grow: true },
                        React.createElement(DateInput_1.DateInput, { format: this.dateInputFormat, name: this.getInputName(this.props.paths.date), onChange: this.dateChanged, ref: "dateInput", value: this.state.dateValue })),
                    React.createElement(elemental_1.InputGroupSection, { grow: true },
                        React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(this.props.paths.time), onChange: this.timeChanged, placeholder: "HH:MM:SS am/pm", value: this.state.timeValue })),
                    React.createElement(elemental_1.InputGroupSection, null,
                        React.createElement(elemental_1.Button, { onClick: this.setNow }, "Now"))),
                React.createElement("input", { name: this.getInputName(this.props.paths.tzOffset), type: "hidden", value: this.state.tzOffsetValue })));
        }
        else {
            input = (React.createElement(elemental_1.FormInput, { noedit: true }, this.format(this.props.value, this.props.formatString)));
        }
        return (React.createElement(elemental_1.FormField, { label: this.props.label, className: "field-type-datetime", htmlFor: this.getInputName(this.props.path) },
            input,
            this.renderNote()));
    }
}
DatetimeField.displayName = 'DatetimeField';
DatetimeField.type = 'Datetime';
exports.DatetimeField = DatetimeField;
