"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const react_day_picker_1 = require("react-day-picker");
const React = require("react");
const react_dom_1 = require("react-dom");
const Popout_1 = require("../../admin/client/App/shared/Popout");
const elemental_1 = require("../../admin/client/App/elemental");
let lastId = 0;
class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            if (!this.refs.input)
                return;
            react_dom_1.findDOMNode(this.refs.input).focus();
        };
        this.handleInputChange = (e) => {
            const { value } = e.target;
            this.setState({ inputValue: value }, this.showCurrentMonth);
        };
        this.handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                // If the date is strictly equal to the format string, dispatch onChange
                if (moment(this.state.inputValue, this.props.format, true).isValid()) {
                    this.props.onChange({ value: this.state.inputValue });
                    // If the date is not strictly equal, only change the tab that is displayed
                }
                else if (moment(this.state.inputValue, this.props.format).isValid()) {
                    this.setState({
                        month: moment(this.state.inputValue, this.props.format).toDate(),
                    }, this.showCurrentMonth);
                }
            }
        };
        this.handleDaySelect = (e, date, modifiers) => {
            if (modifiers && modifiers.disabled)
                return;
            let value = moment(date).format(this.props.format);
            this.props.onChange({ value });
            this.setState({
                pickerIsOpen: false,
                month: date,
                inputValue: value,
            });
        };
        this.handleFocus = (e) => {
            if (this.state.pickerIsOpen)
                return;
            this.showPicker();
        };
        this.handleCancel = () => {
            this.setState({ pickerIsOpen: false });
        };
        this.handleBlur = (e) => {
            let rt = e.relatedTarget || e.nativeEvent.explicitOriginalTarget;
            const popout = this.refs.popout.getPortalDOMNode();
            while (rt) {
                if (rt === popout)
                    return;
                rt = rt.parentNode;
            }
            this.setState({
                pickerIsOpen: false,
            });
        };
        const id = ++lastId;
        let month = new Date();
        const { format, value } = this.props;
        if (moment(value, format, true).isValid()) {
            month = moment(value, format).toDate();
        }
        this.state = {
            id: `_DateInput_${id}`,
            month: month,
            pickerIsOpen: false,
            inputValue: value,
        };
    }
    static get defaultProps() {
        return {
            format: 'YYYY-MM-DD',
        };
    }
    componentDidMount() {
        this.showCurrentMonth();
    }
    componentWillReceiveProps(newProps) {
        if (newProps.value === this.props.value)
            return;
        this.setState({
            month: moment(newProps.value, this.props.format).toDate(),
            inputValue: newProps.value,
        }, this.showCurrentMonth);
    }
    showPicker() {
        this.setState({ pickerIsOpen: true }, this.showCurrentMonth);
    }
    showCurrentMonth() {
        if (!this.refs.picker)
            return;
        this.refs.picker.showMonth(this.state.month);
    }
    render() {
        const selectedDay = this.props.value;
        // react-day-picker adds a class to the selected day based on this
        const modifiers = {
            selected: (day) => moment(day).format(this.props.format) === selectedDay,
        };
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormInput, { autoComplete: "off", id: this.state.id, name: this.props.name, 
                // @ts-ignore
                onBlur: this.handleBlur, onChange: this.handleInputChange, onFocus: this.handleFocus, onKeyPress: this.handleKeyPress, placeholder: this.props.format, ref: "input", value: this.state.inputValue }),
            React.createElement(Popout_1.Popout, { isOpen: this.state.pickerIsOpen, onCancel: this.handleCancel, ref: "popout", relativeToID: this.state.id, width: 260 },
                React.createElement(react_day_picker_1.default, { modifiers: modifiers, onDayClick: this.handleDaySelect, ref: "picker", 
                    // @ts-ignore
                    tabIndex: -1 }))));
    }
}
DateInput.displayName = 'DateInput';
exports.DateInput = DateInput;
