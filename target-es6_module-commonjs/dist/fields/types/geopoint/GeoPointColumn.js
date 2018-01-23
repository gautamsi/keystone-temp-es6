"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class GeoPointColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !value.length)
            return null;
        const formattedValue = `${value[1]}, ${value[0]}`;
        const formattedTitle = `Lat: ${value[1]} Lng: ${value[0]}`;
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { title: formattedTitle, field: this.props.col.type }, formattedValue));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
GeoPointColumn.displayName = 'GeoPointColumn';
exports.GeoPointColumn = GeoPointColumn;
