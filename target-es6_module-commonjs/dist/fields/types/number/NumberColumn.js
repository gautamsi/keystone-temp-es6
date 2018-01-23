"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const numeral = require("numeral");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class NumberColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || isNaN(value))
            return null;
        const formattedValue = (this.props.col.path === 'money') ? numeral(value).format('$0,0.00') : value;
        return formattedValue;
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
NumberColumn.displayName = 'NumberColumn';
exports.NumberColumn = NumberColumn;
