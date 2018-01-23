"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CloudinaryImageSummary_1 = require("../../components/columns/CloudinaryImageSummary");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
const moreIndicatorStyle = {
    color: '#888',
    fontSize: '.8rem',
};
class CloudinaryImagesColumn extends React.Component {
    renderMany(value) {
        if (!value || !value.length)
            return;
        const items = [];
        for (let i = 0; i < 3; i++) {
            if (!value[i])
                break;
            items.push(React.createElement(CloudinaryImageSummary_1.CloudinaryImageSummary, { key: 'image' + i, image: value[i], secure: this.props.col.field.secure }));
        }
        if (value.length > 3) {
            items.push(React.createElement("span", { key: "more", style: moreIndicatorStyle },
                "[...",
                value.length - 3,
                " more]"));
        }
        return items;
    }
    renderValue(value) {
        if (!value || !Object.keys(value).length)
            return;
        return React.createElement(CloudinaryImageSummary_1.CloudinaryImageSummary, { image: value, secure: this.props.col.field.secure });
    }
    render() {
        const value = this.props.data.fields[this.props.col.path];
        const many = value.length > 1;
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null,
            React.createElement(ItemsTableValue_1.ItemsTableValue, { field: this.props.col.type }, many ? this.renderMany(value) : this.renderValue(value[0]))));
    }
}
CloudinaryImagesColumn.displayName = 'CloudinaryImagesColumn';
exports.CloudinaryImagesColumn = CloudinaryImagesColumn;
