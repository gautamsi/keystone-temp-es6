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
class NumberFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChangeBuilder = (type) => {
            const self = this;
            return function handleChange(e) {
                const { filter, onChange } = self.props;
                switch (type) {
                    case 'minValue':
                        onChange({
                            mode: filter.mode,
                            value: {
                                min: e.target.value,
                                max: filter.value.max,
                            },
                        });
                        break;
                    case 'maxValue':
                        onChange({
                            mode: filter.mode,
                            value: {
                                min: filter.value.min,
                                max: e.target.value,
                            },
                        });
                        break;
                    case 'value':
                        onChange({
                            mode: filter.mode,
                            value: e.target.value,
                        });
                }
            };
        };
        // Update the filter mode
        this.selectMode = (e) => {
            this.updateFilter({ mode: e.target.value });
            // focus on next tick
            setTimeout(() => {
                react_dom_1.findDOMNode(this.refs.focusTarget).focus();
            }, 0);
        };
    }
    static getDefaultValue() {
        return {
            mode: MODE_OPTIONS[0].value,
            value: '',
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    componentDidMount() {
        // focus the text input
        react_dom_1.findDOMNode(this.refs.focusTarget).focus();
    }
    // Update the props with this.props.onChange
    updateFilter(changedProp) {
        this.props.onChange(Object.assign({}, this.props.filter, changedProp));
    }
    renderControls(mode) {
        let controls;
        const { field } = this.props;
        const placeholder = field.label + ' is ' + mode.label.toLowerCase() + '...';
        if (mode.value === 'between') {
            controls = (React.createElement(elemental_1.Grid.Row, { xsmall: "one-half", gutter: 10 },
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormInput, { onChange: this.handleChangeBuilder('minValue'), placeholder: "Min.", ref: "focusTarget", type: "number" })),
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormInput, { onChange: this.handleChangeBuilder('maxValue'), placeholder: "Max.", type: "number" }))));
        }
        else {
            controls = (React.createElement(elemental_1.FormInput, { onChange: this.handleChangeBuilder('value'), placeholder: placeholder, ref: "focusTarget", type: "number" }));
        }
        return controls;
    }
    render() {
        const { filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        return (React.createElement(elemental_1.Form, { component: "div" },
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectMode, options: MODE_OPTIONS, value: mode.value })),
            this.renderControls(mode)));
    }
}
exports.NumberFilter = NumberFilter;
