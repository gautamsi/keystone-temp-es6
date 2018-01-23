"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateInput_1 = require("../../components/DateInput");
const ArrayFieldBase_1 = require("../ArrayFieldBase");
const moment = require("moment");
const DEFAULT_INPUT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_FORMAT_STRING = 'Do MMM YYYY';
class DateArrayField extends ArrayFieldBase_1.ArrayFieldBase {
    constructor() {
        super(...arguments);
        this.processInputValue = (value) => {
            if (!value)
                return;
            const m = moment(value);
            return m.isValid() ? m.format(this.props.inputFormat) : value;
        };
        this.formatValue = (value) => {
            return value ? moment(value).format(this.props.formatString) : '';
        };
        this.getInputComponent = () => {
            return DateInput_1.DateInput;
        };
    }
    static get defaultProps() {
        let props = ArrayFieldBase_1.ArrayFieldBase.defaultProps;
        return Object.assign({ formatString: DEFAULT_FORMAT_STRING, inputFormat: DEFAULT_INPUT_FORMAT }, props);
    }
}
DateArrayField.displayName = 'DateArrayField';
DateArrayField.type = 'DateArray';
exports.DateArrayField = DateArrayField;
