"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const moment = require("moment");
const react_day_picker_1 = require("react-day-picker");
const elemental_1 = require("../../../admin/client/App/elemental");
const PRESENCE_OPTIONS = [
    { label: 'At least one element', value: 'some' },
    { label: 'No element', value: 'none' },
];
const MODE_OPTIONS = [
    { label: 'On', value: 'on' },
    { label: 'After', value: 'after' },
    { label: 'Before', value: 'before' },
    { label: 'Between', value: 'between' },
];
const DayPickerIndicator = () => {
    return (React.createElement("span", { className: "DayPicker-Indicator" },
        React.createElement("span", { className: "DayPicker-Indicator__border" }),
        React.createElement("span", { className: "DayPicker-Indicator__bg" })));
};
class DateFilter extends React.Component {
    constructor(props) {
        super(props);
        this.selectPresence = (e) => {
            const presence = e.target.value;
            this.updateFilter({ presence });
            react_dom_1.findDOMNode(this.refs.input).focus();
        };
        this.selectMode = (e) => {
            const mode = e.target.value;
            this.updateFilter({ mode });
            if (mode === 'between') {
                setTimeout(() => { react_dom_1.findDOMNode(this.refs[this.state.activeInputField]).focus(); }, 200);
            }
            else {
                react_dom_1.findDOMNode(this.refs.input).focus();
            }
        };
        this.handleInputChange = (e) => {
            const { value } = e.target;
            let { month } = this.state;
            // Change the current month only if the value entered by the user is a valid
            // date, according to the `L` format
            if (moment(value, 'L', true).isValid()) {
                month = moment(value, 'L').toDate();
            }
            this.updateFilter({ value: value });
            this.setState({ month }, this.showCurrentDate);
        };
        this.setActiveField = (field) => {
            this.setState({
                activeInputField: field,
            });
        };
        this.switchBetweenActiveInputFields = (e, day, modifiers) => {
            if (modifiers && modifiers.disabled)
                return;
            const { activeInputField } = this.state;
            const send = {};
            send[activeInputField] = day;
            this.updateFilter(send);
            const newActiveField = (activeInputField === 'before') ? 'after' : 'before';
            this.setState({ activeInputField: newActiveField }, () => {
                react_dom_1.findDOMNode(this.refs[newActiveField]).focus();
            });
        };
        this.selectDay = (e, day, modifiers) => {
            if (modifiers && modifiers.disabled)
                return;
            this.updateFilter({ value: day });
        };
        this.showCurrentDate = () => {
            this.refs.daypicker.showMonth(this.state.month);
        };
        this.state = {
            activeInputField: 'after',
            month: new Date(),
        };
    }
    static getDefaultValue() {
        return {
            mode: MODE_OPTIONS[0].value,
            presence: PRESENCE_OPTIONS[0].value,
            value: moment(0, 'HH').format(),
            before: moment(0, 'HH').format(),
            after: moment(0, 'HH').format(),
        };
    }
    static get defaultProps() {
        return {
            format: 'DD-MM-YYYY',
            filter: this.getDefaultValue(),
            value: moment().startOf('day').toDate(),
        };
    }
    componentDidMount() {
        // focus the text input
        if (this.props.filter.mode === 'between') {
            react_dom_1.findDOMNode(this.refs[this.state.activeInputField]).focus();
        }
        else {
            react_dom_1.findDOMNode(this.refs.input).focus();
        }
    }
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    renderControls() {
        let controls;
        const { field, filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const placeholder = field.label + ' is ' + mode.label.toLowerCase() + '...';
        // DayPicker stuff
        const modifiers = {
            selected: (day) => moment(filter.value).isSame(day),
        };
        if (mode.value === 'between') {
            controls = (React.createElement("div", null,
                React.createElement("div", { style: { marginBottom: '1em' } },
                    React.createElement(elemental_1.Grid.Row, { xsmall: "one-half", gutter: 10 },
                        React.createElement(elemental_1.Grid.Col, null,
                            React.createElement(elemental_1.FormInput, { ref: "after", placeholder: "From", onFocus: (e) => { this.setActiveField('after'); }, value: moment(filter.after).format(this.props.format) })),
                        React.createElement(elemental_1.Grid.Col, null,
                            React.createElement(elemental_1.FormInput, { ref: "before", placeholder: "To", onFocus: (e) => { this.setActiveField('before'); }, value: moment(filter.before).format(this.props.format) })))),
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(react_day_picker_1.default, { className: "DayPicker--chrome", modifiers: modifiers, onDayClick: this.switchBetweenActiveInputFields }),
                    React.createElement(DayPickerIndicator, null))));
        }
        else {
            controls = (React.createElement("div", null,
                React.createElement("div", { style: { marginBottom: '1em' } },
                    React.createElement(elemental_1.FormInput, { onChange: this.handleInputChange, onFocus: this.showCurrentDate, placeholder: placeholder, ref: "input", value: moment(filter.value).format(this.props.format) })),
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(react_day_picker_1.default, { className: "DayPicker--chrome", modifiers: modifiers, onDayClick: this.selectDay, ref: "daypicker" }),
                    React.createElement(DayPickerIndicator, null))));
        }
        return controls;
    }
    render() {
        const { filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const presence = PRESENCE_OPTIONS.filter(i => i.value === filter.presence)[0];
        return (React.createElement("div", null,
            React.createElement("div", { style: { marginBottom: '1em' } },
                React.createElement(elemental_1.FormSelect, { onChange: this.selectPresence, options: PRESENCE_OPTIONS, value: presence.value })),
            React.createElement("div", { style: { marginBottom: '1em' } },
                React.createElement(elemental_1.FormSelect, { onChange: this.selectMode, options: MODE_OPTIONS, value: mode.value })),
            this.renderControls()));
    }
}
DateFilter.displayName = 'DateFilter';
exports.DateFilter = DateFilter;
