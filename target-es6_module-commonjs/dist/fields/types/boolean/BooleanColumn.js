"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Checkbox_1 = require("../../components/Checkbox");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class BooleanColumn extends React.Component {
    renderValue() {
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { truncate: false, field: this.props.col.type },
            React.createElement(Checkbox_1.Checkbox, { readonly: true, checked: this.props.data.fields[this.props.col.path] })));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
BooleanColumn.displayName = 'BooleanColumn';
exports.BooleanColumn = BooleanColumn;
