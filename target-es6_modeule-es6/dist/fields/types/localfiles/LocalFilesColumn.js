"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.LocalFilesColumn = React.createClass({
    renderValue: function () {
        let value = this.props.data.fields[this.props.col.path];
        if (value.length === 0)
            return '';
        let fileOrFiles = (value.length > 1) ? 'Files' : 'File';
        return value.length + ' ' + fileOrFiles;
    },
    render: function () {
        return (React.createElement("td", { className: "ItemList__col" },
            React.createElement("div", { className: "ItemList__value ItemList__value--local-files" }, this.renderValue())));
    },
});
//# sourceMappingURL=LocalFilesColumn.js.map