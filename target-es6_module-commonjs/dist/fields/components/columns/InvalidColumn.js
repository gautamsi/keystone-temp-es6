"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class InvalidColumn extends React.Component {
    renderValue() {
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type },
            "(Invalid Type: ",
            this.props.col.type,
            ")"));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
InvalidColumn.displayName = 'InvalidColumn';
exports.InvalidColumn = InvalidColumn;
