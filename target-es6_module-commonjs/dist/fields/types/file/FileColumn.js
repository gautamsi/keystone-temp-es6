"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class LocalFileColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || !value.filename)
            return;
        return value.filename;
    }
    render() {
        let value = this.props.data.fields[this.props.col.path];
        let href = value && value.url ? value.url : null;
        let label = value && value.filename ? value.filename : null;
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, { href: href, padded: true, interior: true, field: this.props.col.type },
            React.createElement(ItemsTableValue_1.ItemsTableValue, null, label)));
    }
}
exports.LocalFileColumn = LocalFileColumn;
