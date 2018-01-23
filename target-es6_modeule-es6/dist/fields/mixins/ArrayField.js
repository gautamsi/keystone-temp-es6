"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const react_dom_1 = require("react-dom");
// let Button = require('elemental').Button;
// let FormField = require('elemental').FormField;
// let FormInput = require('elemental').FormInput;
const elemental_1 = require("elemental");
let lastId = 0;
let ENTER_KEYCODE = 13;
function newItem(value) {
    lastId = lastId + 1;
    return { key: 'i' + lastId, value: value };
}
function reduceValues(values) {
    return values.map(i => i.value);
}
function getInitialState() {
    return {
        values: Array.isArray(this.props.value) ? this.props.value.map(newItem) : [],
    };
}
exports.getInitialState = getInitialState;
function componentWillReceiveProps(nextProps) {
    if (nextProps.value.join('|') !== reduceValues(this.state.values).join('|')) {
        this.setState({
            values: nextProps.value.map(newItem),
        });
    }
}
exports.componentWillReceiveProps = componentWillReceiveProps;
function addItem() {
    let newValues = this.state.values.concat(newItem(''));
    this.setState({
        values: newValues,
    }, () => {
        if (!this.state.values.length)
            return;
        react_dom_1.findDOMNode(this.refs['item_' + this.state.values.length]).focus();
    });
    this.valueChanged(reduceValues(newValues));
}
exports.addItem = addItem;
function removeItem(i) {
    let newValues = _.without(this.state.values, i);
    this.setState({
        values: newValues,
    }, function () {
        react_dom_1.findDOMNode(this.refs.button).focus();
    });
    this.valueChanged(reduceValues(newValues));
}
exports.removeItem = removeItem;
function updateItem(i, event) {
    let updatedValues = this.state.values;
    let updateIndex = updatedValues.indexOf(i);
    let newValue = event.value || event.target.value;
    updatedValues[updateIndex].value = this.cleanInput ? this.cleanInput(newValue) : newValue;
    this.setState({
        values: updatedValues,
    });
    this.valueChanged(reduceValues(updatedValues));
}
exports.updateItem = updateItem;
function valueChanged(values) {
    this.props.onChange({
        path: this.props.path,
        value: values,
    });
}
exports.valueChanged = valueChanged;
function renderField() {
    return (React.createElement("div", null,
        this.state.values.map(this.renderItem),
        React.createElement(elemental_1.Button, { ref: "button", onClick: this.addItem }, "Add item")));
}
exports.renderField = renderField;
function renderItem(item, index) {
    const Input = this.getInputComponent ? this.getInputComponent() : elemental_1.FormInput;
    const value = this.processInputValue ? this.processInputValue(item.value) : item.value;
    return (React.createElement(elemental_1.FormField, { key: item.key },
        React.createElement(Input, { ref: 'item_' + (index + 1), name: this.getInputName(this.props.path), value: value, onChange: this.updateItem.bind(this, item), onKeyDown: this.addItemOnEnter, autoComplete: "off" }),
        React.createElement(elemental_1.Button, { type: "link-cancel", onClick: this.removeItem.bind(this, item), className: "keystone-relational-button" },
            React.createElement("span", { className: "octicon octicon-x" }))));
}
exports.renderItem = renderItem;
function renderValue() {
    const Input = this.getInputComponent ? this.getInputComponent() : elemental_1.FormInput;
    return (React.createElement("div", null, this.state.values.map((item, i) => {
        const value = this.formatValue ? this.formatValue(item.value) : item.value;
        return (React.createElement("div", { key: i, style: i ? { marginTop: '1em' } : null },
            React.createElement(Input, { noedit: true, value: value })));
    })));
}
exports.renderValue = renderValue;
// Override shouldCollapse to check for array length
function shouldCollapse() {
    return this.props.collapse && !this.props.value.length;
}
exports.shouldCollapse = shouldCollapse;
function addItemOnEnter(event) {
    if (event.keyCode === ENTER_KEYCODE) {
        this.addItem();
        event.preventDefault();
    }
}
exports.addItemOnEnter = addItemOnEnter;
//# sourceMappingURL=ArrayField.js.map