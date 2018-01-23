"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class PasswordColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        return value ? '********' : '';
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
PasswordColumn.displayName = 'PasswordColumn';
exports.PasswordColumn = PasswordColumn;
