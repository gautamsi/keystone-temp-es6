"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class EmailColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value)
            return;
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { to: 'mailto:' + value, padded: true, exterior: true, field: this.props.col.type }, value));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
EmailColumn.displayName = 'EmailColumn';
exports.EmailColumn = EmailColumn;
