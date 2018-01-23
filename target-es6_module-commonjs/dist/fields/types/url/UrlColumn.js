"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ItemsTableCell_1 = require("../../components/ItemsTableCell");
const ItemsTableValue_1 = require("../../components/ItemsTableValue");
class UrlColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value)
            return;
        // if the value doesn't start with a prototcol, assume http for the href
        let href = value;
        if (href && !/^(mailto\:)|(\w+\:\/\/)/.test(href)) {
            href = 'http://' + value;
        }
        // strip the protocol from the link if it's http(s)
        let label = value.replace(/^https?\:\/\//i, '');
        return (React.createElement(ItemsTableValue_1.ItemsTableValue, { to: href, padded: true, exterior: true, field: this.props.col.type }, label));
    }
    render() {
        return (React.createElement(ItemsTableCell_1.ItemsTableCell, null, this.renderValue()));
    }
}
UrlColumn.displayName = 'UrlColumn';
exports.UrlColumn = UrlColumn;
