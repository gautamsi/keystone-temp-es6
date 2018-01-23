"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../../admin/client/App/elemental");
const INVERTED_OPTIONS = [
    { label: 'Matches', value: false },
    { label: 'Does NOT Match', value: true },
];
const MODE_OPTIONS = [
    { label: 'Contains', value: 'contains' },
    { label: 'Exactly', value: 'exactly' },
    { label: 'Begins with', value: 'beginsWith' },
    { label: 'Ends with', value: 'endsWith' },
];
class TextFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.selectMode = (e) => {
            const mode = e.target.value;
            this.updateFilter({ mode });
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
        };
        this.toggleInverted = (inverted) => {
            this.updateFilter({ inverted });
            react_dom_1.findDOMNode(this.refs.focusTarget).focus();
        };
        this.updateValue = (e) => {
            this.updateFilter({ value: e.target.value });
        };
    }
    static getDefaultValue() {
        return {
            mode: MODE_OPTIONS[0].value,
            inverted: INVERTED_OPTIONS[0].value,
            value: '',
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    render() {
        const { field, filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const placeholder = field.label + ' ' + mode.label.toLowerCase() + '...';
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.SegmentedControl, { equalWidthSegments: true, onChange: this.toggleInverted, options: INVERTED_OPTIONS, value: filter.inverted })),
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectMode, options: MODE_OPTIONS, value: mode.value })),
            React.createElement(elemental_1.FormInput, { autoFocus: true, onChange: this.updateValue, placeholder: placeholder, ref: "focusTarget", value: this.props.filter.value })));
    }
}
exports.TextFilter = TextFilter;
