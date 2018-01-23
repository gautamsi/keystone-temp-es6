import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as moment from 'moment';
import DayPicker from 'react-day-picker';
import { FormInput, FormSelect, Grid, SegmentedControl, } from '../../../admin/client/App/elemental';
const INVERTED_OPTIONS = [
    { label: 'Matches', value: false },
    { label: 'Does NOT Match', value: true },
];
const MODE_OPTIONS = [
    { label: 'On', value: 'on' },
    { label: 'After', value: 'after' },
    { label: 'Before', value: 'before' },
    { label: 'Between', value: 'between' },
];
const DayPickerIndicator = ({ activeInputField }) => {
    const style = activeInputField === 'before' ? { left: '11rem' } : null;
    return (React.createElement("span", { className: "DayPicker-Indicator", style: style },
        React.createElement("span", { className: "DayPicker-Indicator__border" }),
        React.createElement("span", { className: "DayPicker-Indicator__bg" })));
};
export class DateFilter extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInverted = (value) => {
            this.updateFilter({ inverted: value });
            this.setFocus(this.props.filter.mode);
        };
        this.selectMode = (e) => {
            const mode = e.target.value;
            this.updateFilter({ mode });
            this.setFocus(mode);
        };
        this.handleInputChange = (e) => {
            // TODO @jedwatson
            // Entering virtually any value will return an "Invalid date", so I'm
            // temporarily disabling user entry. This entire component needs review.
            // const { value } = e.target;
            // let { month } = this.state;
            // // Change the current month only if the value entered by the user is a valid
            // // date, according to the `L` format
            // if (moment(value, 'L', true).isValid()) {
            // 	month = moment(value, 'L').toDate();
            // }
            // this.updateFilter({ value: value });
            // this.setState({ month }, this.showCurrentDate);
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
            const newActiveField = activeInputField === 'before'
                ? 'after'
                : 'before';
            send[activeInputField] = day;
            this.updateFilter(send);
            this.setState({ activeInputField: newActiveField }, () => {
                findDOMNode(this.refs[newActiveField]).focus();
            });
        };
        this.selectDay = (e, day, modifiers) => {
            if (modifiers && modifiers.disabled)
                return;
            this.updateFilter({ value: day });
        };
        this.showCurrentDate = () => {
            // give the UI a moment to render
            setTimeout(() => {
                this.refs.daypicker.showMonth(this.state.month);
            }, 50);
        };
        this.state = {
            activeInputField: 'after',
            month: new Date(),
        };
    }
    static getDefaultValue() {
        return {
            mode: MODE_OPTIONS[0].value,
            inverted: INVERTED_OPTIONS[0].value,
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
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    // ==============================
    // METHODS
    // ==============================
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    setFocus(mode) {
        // give the UI a moment to render
        if (mode === 'between') {
            setTimeout(() => {
                findDOMNode(this.refs[this.state.activeInputField]).focus();
            }, 50);
        }
        else {
            setTimeout(() => {
                this.refs.input.focus();
            }, 50);
        }
    }
    // ==============================
    // RENDERERS
    // ==============================
    renderToggle() {
        const { filter } = this.props;
        return (React.createElement("div", { style: { marginBottom: '1em' } },
            React.createElement(SegmentedControl, { equalWidthSegments: true, onChange: this.toggleInverted, options: INVERTED_OPTIONS, value: filter.inverted })));
    }
    renderControls() {
        let controls;
        const { activeInputField } = this.state;
        const { field, filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const placeholder = field.label + ' is ' + mode.label.toLowerCase() + '...';
        // DayPicker Modifiers - Selected Day
        let modifiers = filter.mode === 'between' ? {
            selected: (day) => moment(filter[activeInputField]).isSame(day),
        } : {
            selected: (day) => moment(filter.value).isSame(day),
        };
        if (mode.value === 'between') {
            controls = (React.createElement("div", null,
                React.createElement("div", { style: { marginBottom: '1em' } },
                    React.createElement(Grid.Row, { xsmall: "one-half", gutter: 10 },
                        React.createElement(Grid.Col, null,
                            React.createElement(FormInput, { autoFocus: true, ref: "after", placeholder: "From", onChange: this.handleInputChange, onFocus: () => this.setActiveField('after'), value: moment(filter.after).format(this.props.format) })),
                        React.createElement(Grid.Col, null,
                            React.createElement(FormInput, { ref: "before", placeholder: "To", onChange: this.handleInputChange, onFocus: () => this.setActiveField('before'), value: moment(filter.before).format(this.props.format) })))),
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(DayPicker, { modifiers: modifiers, className: "DayPicker--chrome", onDayClick: this.switchBetweenActiveInputFields }),
                    React.createElement(DayPickerIndicator, { activeInputField: activeInputField }))));
        }
        else {
            controls = (React.createElement("div", null,
                React.createElement("div", { style: { marginBottom: '1em' } },
                    React.createElement(FormInput, { autoFocus: true, ref: "input", placeholder: placeholder, value: moment(filter.value).format(this.props.format), onChange: this.handleInputChange, onFocus: this.showCurrentDate })),
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(DayPicker, { ref: "daypicker", modifiers: modifiers, className: "DayPicker--chrome", onDayClick: this.selectDay }),
                    React.createElement(DayPickerIndicator, null))));
        }
        return controls;
    }
    render() {
        const { filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        return (React.createElement("div", null,
            this.renderToggle(),
            React.createElement("div", { style: { marginBottom: '1em' } },
                React.createElement(FormSelect, { options: MODE_OPTIONS, onChange: this.selectMode, value: mode.value })),
            this.renderControls()));
    }
}
DateFilter.displayName = 'DateFilter';
