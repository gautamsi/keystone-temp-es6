"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../../admin/client/App/elemental");
const MODE_OPTIONS = [
    { label: 'Contains', value: 'contains' },
    { label: 'Exactly', value: 'exactly' },
    { label: 'Begins with', value: 'beginsWith' },
    { label: 'Ends with', value: 'endsWith' },
];
const PRESENCE_OPTIONS = [
    { label: 'At least one element', value: 'some' },
    { label: 'No element', value: 'none' },
];
class TextArrayFilter extends React.Component {
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
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    selectMode(e) {
        const mode = e.target.value;
        this.updateFilter({ mode });
        react_dom_1.findDOMNode(this.refs.focusTarget).focus();
    }
    selectPresence(e) {
        const presence = e.target.value;
        this.updateFilter({ presence });
        react_dom_1.findDOMNode(this.refs.focusTarget).focus();
    }
    updateValue(e) {
        this.updateFilter({ value: e.target.value });
    }
    render() {
        const { filter } = this.props;
        const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
        const presence = PRESENCE_OPTIONS.filter(i => i.value === filter.presence)[0];
        const beingVerb = mode.value === 'exactly' ? ' is ' : ' ';
        const placeholder = presence.label + beingVerb + mode.label.toLowerCase() + '...';
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectPresence, options: PRESENCE_OPTIONS, value: presence.value })),
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.FormSelect, { onChange: this.selectMode, options: MODE_OPTIONS, value: mode.value })),
            React.createElement(elemental_1.FormInput, { autoFocus: true, onChange: this.updateValue, placeholder: placeholder, ref: "focusTarget", value: this.props.filter.value })));
    }
}
exports.TextArrayFilter = TextArrayFilter;
