"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
const displayName = require("display-name");
class NameColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || (!value.first && !value.last))
            return '(no name)';
        return displayName(value.first, value.last);
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { to: this.props.linkTo, padded: true, interior: true, field: this.props.col.type }, this.renderValue())));
    }
}
NameColumn.displayName = 'NameColumn';
exports.NameColumn = NameColumn;
