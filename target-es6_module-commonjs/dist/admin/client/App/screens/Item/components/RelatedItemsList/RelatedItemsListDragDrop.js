"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
const RelatedItemsListRow_1 = require("./RelatedItemsListRow");
class RelatedItemsListDragDrop extends React.Component {
    render() {
        const { items } = this.props;
        return (React.createElement("tbody", null, items.results.map((item, i) => {
            return (React.createElement(RelatedItemsListRow_1.SortableRelatedItemsListRow, Object.assign({ key: item.id, index: i, item: item }, this.props)));
        })));
    }
}
exports.DragDrop = react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)(RelatedItemsListDragDrop);
