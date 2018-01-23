"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CloudinaryImageSummary_1 = require("../../components/columns/CloudinaryImageSummary");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class CloudinaryImageColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || !Object.keys(value).length)
            return;
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type },
            React.createElement(CloudinaryImageSummary_1.CloudinaryImageSummary, { label: "dimensions", image: value, secure: this.props.col.field.secure })));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
CloudinaryImageColumn.displayName = 'CloudinaryImageColumn';
exports.CloudinaryImageColumn = CloudinaryImageColumn;
