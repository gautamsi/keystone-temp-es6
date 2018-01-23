import { DateInput } from '../../components/DateInput';
import { FieldBase } from '../FieldBase';
import * as moment from 'moment';
import * as React from 'react';
import { Button, FormInput, InputGroup as Group, InputGroupSection as Section, } from '../../../admin/client/App/elemental';
/*
TODO: Implement yearRange Prop, or deprecate for max / min values (better)
*/
const DEFAULT_INPUT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_FORMAT_STRING = 'Do MMM YYYY';
export class DateField extends FieldBase {
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
        return (React.createElement(FormInput, { noedit: true }, this.format(this.props.value)));
    }
    renderField() {
        let dateAsMoment = this.toMoment(this.props.value);
        let value = this.props.value && dateAsMoment.isValid()
            ? dateAsMoment.format(this.props.inputFormat)
            : this.props.value;
        return (React.createElement(Group, null,
            React.createElement(Section, { grow: true },
                React.createElement(DateInput, { format: this.props.inputFormat, name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "dateInput", value: value })),
            React.createElement(Section, null,
                React.createElement(Button, { onClick: this.setToday }, "Today"))));
    }
}
DateField.displayName = 'DateField';
DateField.type = 'Date';
