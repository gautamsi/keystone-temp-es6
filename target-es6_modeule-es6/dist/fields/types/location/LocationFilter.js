import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { FormField, FormInput, Grid, SegmentedControl, } from '../../../admin/client/App/elemental';
const INVERTED_OPTIONS = [
    { label: 'Matches', value: false },
    { label: 'Does NOT Match', value: true },
];
export class TextFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.toggleInverted = (value) => {
            this.updateFilter('inverted', value);
            findDOMNode(this.refs.focusTarget).focus();
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
            React.createElement(FormField, null,
                React.createElement(SegmentedControl, { equalWidthSegments: true, onChange: this.toggleInverted, options: INVERTED_OPTIONS, value: filter.inverted })),
            React.createElement(FormField, null,
                React.createElement(FormInput, { autoFocus: true, name: "street", onChange: this.updateValue, placeholder: "Address", ref: "focusTarget", value: filter.street })),
            React.createElement(Grid.Row, { gutter: 10 },
                React.createElement(Grid.Col, { xsmall: "two-thirds" },
                    React.createElement(FormInput, { name: "city", onChange: this.updateValue, placeholder: "City", style: { marginBottom: '1em' }, value: filter.city })),
                React.createElement(Grid.Col, { xsmall: "one-third" },
                    React.createElement(FormInput, { name: "state", onChange: this.updateValue, placeholder: "State", style: { marginBottom: '1em' }, value: filter.state })),
                React.createElement(Grid.Col, { xsmall: "one-third", style: { marginBottom: 0 } },
                    React.createElement(FormInput, { name: "code", onChange: this.updateValue, placeholder: "Postcode", value: filter.code })),
                React.createElement(Grid.Col, { xsmall: "two-thirds", style: { marginBottom: 0 } },
                    React.createElement(FormInput, { name: "country", onChange: this.updateValue, placeholder: "Country", value: filter.country })))));
    }
}
