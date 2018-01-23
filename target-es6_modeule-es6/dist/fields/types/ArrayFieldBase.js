import * as React from 'react';
import * as _ from 'lodash';
import { findDOMNode } from 'react-dom';
// let Button = require('elemental').Button;
// let FormField = require('elemental').FormField;
// let FormInput = require('elemental').FormInput;
import { Button, FormField, FormInput } from '../../admin/client/App/elemental';
import { FieldBase } from './FieldBase';
let lastId = 0;
let ENTER_KEYCODE = 13;
function newItem(value) {
    lastId = lastId + 1;
    return { key: 'i' + lastId, value: value };
}
function reduceValues(values) {
    return values.map(i => i.value);
}
export class ArrayFieldBase extends FieldBase {
    constructor(props) {
        super(props);
        this.addItem = () => {
            let newValues = this.state.values.concat(newItem(''));
            this.setState({
                values: newValues,
            }, () => {
                if (!this.state.values.length)
                    return;
                findDOMNode(this.refs['item_' + this.state.values.length]).focus();
            });
            this.valueChanged(reduceValues(newValues));
        };
        this.valueChanged = (values) => {
            this.props.onChange({
                path: this.props.path,
                value: values,
            });
        };
        this.addItemOnEnter = (event) => {
            if (event.keyCode === ENTER_KEYCODE) {
                this.addItem();
                event.preventDefault();
            }
        };
        this.state = Object.assign({ values: Array.isArray(this.props.value) ? this.props.value.map(newItem) : [] }, this.state);
    }
    static get defaultProps() {
        let props = FieldBase.defaultProps;
        return Object.assign({}, props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value.join('|') !== reduceValues(this.state.values).join('|')) {
            this.setState({
                values: nextProps.value.map(newItem),
            });
        }
    }
    removeItem(i) {
        let newValues = _.without(this.state.values, i);
        this.setState({
            values: newValues,
        }, function () {
            findDOMNode(this.refs.button).focus();
        });
        this.valueChanged(reduceValues(newValues));
    }
    updateItem(i, event) {
        let updatedValues = this.state.values;
        let updateIndex = updatedValues.indexOf(i);
        let newValue = event.value || event.target.value;
        updatedValues[updateIndex].value = this.cleanInput ? this.cleanInput(newValue) : newValue;
        this.setState({
            values: updatedValues,
        });
        this.valueChanged(reduceValues(updatedValues));
    }
    renderField() {
        return (React.createElement("div", null,
            this.state.values.map(this.renderItem),
            React.createElement(Button, { ref: "button", onClick: this.addItem }, "Add item")));
    }
    renderItem(item, index) {
        const Input = this.getInputComponent ? this.getInputComponent() : FormInput;
        const value = this.processInputValue ? this.processInputValue(item.value) : item.value;
        return (React.createElement(FormField, { key: item.key },
            React.createElement(Input, { ref: 'item_' + (index + 1), name: this.getInputName(this.props.path), value: value, onChange: this.updateItem.bind(this, item), onKeyDown: this.addItemOnEnter, autoComplete: "off" }),
            React.createElement(Button, { type: "link-cancel", onClick: this.removeItem.bind(this, item), className: "keystone-relational-button" },
                React.createElement("span", { className: "octicon octicon-x" }))));
    }
    renderValue() {
        const Input = this.getInputComponent ? this.getInputComponent() : FormInput;
        return (React.createElement("div", null, this.state.values.map((item, i) => {
            const value = this.formatValue ? this.formatValue(item.value) : item.value;
            return (React.createElement("div", { key: i, style: i ? { marginTop: '1em' } : null },
                React.createElement(Input, { noedit: true, value: value })));
        })));
    }
    // Override shouldCollapse to check for array length
    shouldCollapse() {
        return this.props.collapse && !this.props.value.length;
    }
}
