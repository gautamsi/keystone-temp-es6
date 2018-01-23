"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const moment = require("moment");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class DateColumn extends React.Component {
    getValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value)
            return null;
        const format = (this.props.col.type === 'datetime') ? 'MMMM Do YYYY, h:mm:ss a' : 'MMMM Do YYYY';
        return moment(value).format(format);
    }
    render() {
        const value = this.getValue();
        const empty = !value && this.props.linkTo ? true : false;
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type, to: this.props.linkTo, empty: empty }, value)));
    }
}
DateColumn.displayName = 'DateColumn';
exports.DateColumn = DateColumn;
