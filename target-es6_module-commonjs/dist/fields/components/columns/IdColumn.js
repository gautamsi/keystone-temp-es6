"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class IdColumn extends React.Component {
    renderValue() {
        const value = this.props.data.id;
        if (!value)
            return null;
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { padded: true, interior: true, title: value, to: Keystone.adminPath + '/' + this.props.list.path + '/' + value, field: this.props.col.type }, value));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
IdColumn.displayName = 'IdColumn';
exports.IdColumn = IdColumn;
