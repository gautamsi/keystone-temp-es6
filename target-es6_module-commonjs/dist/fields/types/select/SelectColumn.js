"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class SelectColumn extends React.Component {
    getValue() {
        const value = this.props.data.fields[this.props.col.path];
        const option = this.props.col.field.ops.filter(i => i.value === value)[0];
        return option ? option.label : null;
    }
    render() {
        const value = this.getValue();
        const empty = !value && this.props.linkTo ? true : false;
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type, to: this.props.linkTo, empty: empty }, value)));
    }
}
SelectColumn.displayName = 'SelectColumn';
exports.SelectColumn = SelectColumn;
