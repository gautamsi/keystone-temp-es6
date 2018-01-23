"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../../admin/client/App/elemental");
const INVERTED_OPTIONS = [
    { label: 'Matches', value: false },
    { label: 'Does NOT Match', value: true },
];
class TextFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.toggleInverted = (value) => {
            this.updateFilter('inverted', value);
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
        };
        this.updateValue = (e) => {
            this.updateFilter(e.target.name, e.target.value);
        };
    }
    static getDefaultValue() {
        return {
            inverted: INVERTED_OPTIONS[0].value,
            street: undefined,
            city: undefined,
            state: undefined,
            code: undefined,
            country: undefined,
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    updateFilter(key, val) {
        const update = {};
        update[key] = val;
        this.props.onChange(Object.assign(this.props.filter, update));
    }
    render() {
        const { filter } = this.props;
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.SegmentedControl, { equalWidthSegments: true, onChange: this.toggleInverted, options: INVERTED_OPTIONS, value: filter.inverted })),
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormInput, { autoFocus: true, name: "street", onChange: this.updateValue, placeholder: "Address", ref: "focusTarget", value: filter.street })),
            React.createElement(elemental_1.Grid.Row, { gutter: 10 },
                React.createElement(elemental_1.Grid.Col, { xsmall: "two-thirds" },
                    React.createElement(elemental_1.FormInput, { name: "city", onChange: this.updateValue, placeholder: "City", style: { marginBottom: '1em' }, value: filter.city })),
                React.createElement(elemental_1.Grid.Col, { xsmall: "one-third" },
                    React.createElement(elemental_1.FormInput, { name: "state", onChange: this.updateValue, placeholder: "State", style: { marginBottom: '1em' }, value: filter.state })),
                React.createElement(elemental_1.Grid.Col, { xsmall: "one-third", style: { marginBottom: 0 } },
                    React.createElement(elemental_1.FormInput, { name: "code", onChange: this.updateValue, placeholder: "Postcode", value: filter.code })),
                React.createElement(elemental_1.Grid.Col, { xsmall: "two-thirds", style: { marginBottom: 0 } },
                    React.createElement(elemental_1.FormInput, { name: "country", onChange: this.updateValue, placeholder: "Country", value: filter.country })))));
    }
}
exports.TextFilter = TextFilter;
