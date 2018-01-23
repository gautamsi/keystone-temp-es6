import { DateInput } from '../../components/DateInput';
import { ArrayFieldBase } from '../ArrayFieldBase';
import * as moment from 'moment';
const DEFAULT_INPUT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_FORMAT_STRING = 'Do MMM YYYY';
export class DateArrayField extends ArrayFieldBase {
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
            return DateInput;
        };
    }
    static get defaultProps() {
        let props = ArrayFieldBase.defaultProps;
        return Object.assign({ formatString: DEFAULT_FORMAT_STRING, inputFormat: DEFAULT_INPUT_FORMAT }, props);
    }
}
DateArrayField.displayName = 'DateArrayField';
DateArrayField.type = 'DateArray';
