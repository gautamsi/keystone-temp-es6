"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../../admin/client/App/elemental");
const MODE_OPTIONS = [
    { label: 'Exactly', value: 'equals' },
    { label: 'Greater Than', value: 'gt' },
    { label: 'Less Than', value: 'lt' },
    { label: 'Between', value: 'between' },
];
const PRESENCE_OPTIONS = [
    { label: 'At least one element', value: 'some' },
    { label: 'No element', value: 'none' },
];
class NumberArrayFilter extends React.Component {
    constructor() {
        super(...arguments);
        // Returns a function that handles a specific type of onChange events for
        // either 'minValue', 'maxValue' or simply 'value'
        this.handleValueChangeBuilder = (type) => {
            return (e) => {
                switch (type) {
                    case 'minValue':
                        this.updateFilter({
                            value: {
                                min: e.target.value,
                                max: this.props.filter.value.max,
                            },
                        });
                        break;
                    case 'maxValue':
                        this.updateFilter({
                            value: {
                                min: this.props.filter.value.min,
                                max: e.target.value,
                            },
                        });
                        break;
                    case 'value':
                        this.updateFilter({
                            value: e.target.value,
                        });
                        break;
                }
            };
        };
        // Update the filter mode
        this.selectMode = (e) => {
            const mode = e.target.value;
            this.updateFilter({ mode });
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
        };
        // Update the presence selection
        this.selectPresence = (e) => {
            const presence = e.target.value;
            this.updateFilter({ presence });
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
        };
    }
    static getDefaultValue() {
        return {
            mode: MODE_OPTIONS[0].value,
            presence: PRESENCE_OPTIONS[0].value,
            value: '',
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    // Update the props with this.props.onChange
    updateFilter(changedProp) {
        this.props.onChange(Object.assign({}, this.props.filter, changedProp));
    }
    // Render the controls, showing two inputs when the mode is "between"
    renderControls(presence, mode) {
        let controls;
        const placeholder = presence.label + ' is ' + mode.label.toLowerCase() + '...';
        if (mode.value === 'between') {
            // Render "min" and "max" input
            controls = (React.createElement(elemental_1.Grid.Row, { xsmall: "one-half", gutter: 10 },
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormInput, { onChange: this.handleValueChangeBuilder('minValue'), placeholder: "Min.", ref: "focusTarget", type: "number", value: this.props.filter.value.min })),
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormInput, { onChange: this.handleValueChangeBuilder('maxValue'), placeholder: "Max.", type: "number", value: this.props.filter.value.max }))));
        }
        else {
            // Render one number input
            controls = (React.createElement(elemental_1.FormInput, { onChange: this.handleValueChangeBuilder('value'), placeholder: placeholder, ref: "focusTarget", type: "number", value: this.props.filter.value }));
        }
        return controls;
    }
    render() {
        const { filter } = this.props;
        // Get mode and presence based on their values with .filter
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const presence = PRESENCE_OPTIONS.filter(i => i.value === filter.presence)[0];
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectPresence, options: PRESENCE_OPTIONS, value: presence.value })),
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectMode, options: MODE_OPTIONS, value: mode.value })),
            this.renderControls(presence, mode)));
    }
}
exports.NumberArrayFilter = NumberArrayFilter;
