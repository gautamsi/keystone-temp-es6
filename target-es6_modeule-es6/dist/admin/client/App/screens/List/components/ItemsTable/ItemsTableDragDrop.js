import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { SortableTableRow } from './ItemsTableRow';
import { DropZone } from './ItemsTableDragDropZone';
class ItemsTableDragDrop extends React.Component {
    render() {
        return (React.createElement("tbody", null,
            this.props.items.results.map((item, i) => {
                return (React.createElement(SortableTableRow, Object.assign({ key: item.id, index: i, sortOrder: item.sortOrder || 0, id: item.id, item: item }, this.props)));
            }),
            React.createElement(DropZone, Object.assign({}, this.props))));
    }
}
ItemsTableDragDrop.displayName = 'ItemsTableDragDrop';
export const DragDrop = DragDropContext(HTML5Backend)(ItemsTableDragDrop);
