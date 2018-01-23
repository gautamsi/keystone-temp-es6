"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
const ItemsTableRow_1 = require("./ItemsTableRow");
const ItemsTableDragDropZone_1 = require("./ItemsTableDragDropZone");
class ItemsTableDragDrop extends React.Component {
    render() {
        return (React.createElement("tbody", null,
            this.props.items.results.map((item, i) => {
                return (React.createElement(ItemsTableRow_1.SortableTableRow, Object.assign({ key: item.id, index: i, sortOrder: item.sortOrder || 0, id: item.id, item: item }, this.props)));
            }),
            React.createElement(ItemsTableDragDropZone_1.DropZone, Object.assign({}, this.props))));
    }
}
ItemsTableDragDrop.displayName = 'ItemsTableDragDrop';
exports.DragDrop = react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)(ItemsTableDragDrop);
