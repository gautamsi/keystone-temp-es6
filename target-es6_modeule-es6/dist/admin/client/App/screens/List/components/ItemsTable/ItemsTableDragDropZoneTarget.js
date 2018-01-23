/**
 * THIS IS ORPHANED AND ISN'T RENDERED AT THE MOMENT
 * THIS WAS DONE TO FINISH THE REDUX INTEGRATION, WILL REWRITE SOON
 * - @mxstbr
 */
import * as React from 'react';
import { DropTarget } from 'react-dnd';
import { setCurrentPage } from '../../actions';
let timeoutID;
// drop target
class ItemsTableDragDropZoneTarget extends React.Component {
    componentDidUpdate() {
        if (timeoutID && !this.props.isOver) {
            clearTimeout(timeoutID);
            timeoutID = false;
        }
    }
    render() {
        const { pageItems, page, isOver, dispatch } = this.props;
        let { className } = this.props;
        if (isOver) {
            className += (page === this.props.currentPage) ? ' is-available ' : ' is-waiting ';
        }
        return this.props.connectDropTarget(React.createElement("div", { className: className, onClick: (e) => {
                dispatch(setCurrentPage(page));
            } }, pageItems));
    }
}
ItemsTableDragDropZoneTarget.displayName = 'ItemsTableDragDropZoneTarget';
/**
 * Implements drag target.
 */
const dropTarget = {
    drop(props, monitor, component) {
        // we send manual data to endDrag to send this item to the correct page
        const { page } = props.drag;
        const targetPage = props.page;
        const pageSize = props.pageSize;
        const item = monitor.getItem();
        item.goToPage = props.page;
        item.prevSortOrder = item.sortOrder;
        // Work out the new sort order. If the new page is greater, we'll put it at the start of the page, and
        // if it's smaller we'll put it at the end of the page.
        item.newSortOrder = (targetPage < page) ? (targetPage * pageSize) : (targetPage * pageSize - (pageSize - 1));
        return item;
    },
};
/**
 * Specifies the props to inject into your component.
 */
function dropProps(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    };
}
export const DropZoneTarget = DropTarget('item', dropTarget, dropProps)(ItemsTableDragDropZoneTarget);
