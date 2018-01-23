"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../ItemsTableCell");
const ItemsTableValue_1 = require("../ItemsTableValue");
class ArrayColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !value.length)
            return null;
        return value.join(', ');
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
ArrayColumn.displayName = 'ArrayColumn';
exports.ArrayColumn = ArrayColumn;
