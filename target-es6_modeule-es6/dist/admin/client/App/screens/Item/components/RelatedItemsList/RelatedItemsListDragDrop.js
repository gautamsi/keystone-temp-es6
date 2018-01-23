import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { SortableRelatedItemsListRow } from './RelatedItemsListRow';
class RelatedItemsListDragDrop extends React.Component {
    render() {
        const { items } = this.props;
        return (React.createElement("tbody", null, items.results.map((item, i) => {
            return (React.createElement(SortableRelatedItemsListRow, Object.assign({ key: item.id, index: i, item: item }, this.props)));
        })));
    }
}
export const DragDrop = DragDropContext(HTML5Backend)(RelatedItemsListDragDrop);
