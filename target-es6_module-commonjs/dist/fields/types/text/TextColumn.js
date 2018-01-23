"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class TextColumn extends React.Component {
    getValue() {
        // cropping text is important for textarea, which uses this column
        const value = this.props.data.fields[this.props.col.path];
        return value ? value.substr(0, 100) : null;
    }
    render() {
        const value = this.getValue();
        const empty = !value && this.props.linkTo ? true : false;
        const className = this.props.col.field.monospace ? 'ItemList__value--monospace' : undefined;
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { className: className, to: this.props.linkTo, empty: empty, padded: true, interior: true, field: this.props.col.type }, value)));
    }
}
TextColumn.displayName = 'TextColumn';
exports.TextColumn = TextColumn;
