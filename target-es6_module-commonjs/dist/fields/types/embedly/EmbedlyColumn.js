"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
class EmbedlyColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || !_.size(value))
            return;
        return React.createElement("a", { href: value.url, target: "_blank" }, value.url);
    }
    render() {
        return (React.createElement("td", null,
            React.createElement("div", { className: "ItemList__value" }, this.renderValue())));
    }
}
exports.EmbedlyColumn = EmbedlyColumn;
