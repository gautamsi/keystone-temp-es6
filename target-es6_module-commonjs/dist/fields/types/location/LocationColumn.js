"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
const SUB_FIELDS = ['street1', 'suburb', 'state', 'postcode', 'country'];
class LocationColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !Object.keys(value).length)
            return null;
        const output = [];
        SUB_FIELDS.map((i) => {
            if (value[i]) {
                output.push(value[i]);
            }
        });
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type, title: output.join(', ') }, output.join(', ')));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
LocationColumn.displayName = 'LocationColumn';
exports.LocationColumn = LocationColumn;
