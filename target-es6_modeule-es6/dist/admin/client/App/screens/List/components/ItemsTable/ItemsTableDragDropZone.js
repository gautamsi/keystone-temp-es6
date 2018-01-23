/**
 * THIS IS ORPHANED AND ISN'T RENDERED AT THE MOMENT
 * THIS WAS DONE TO FINISH THE REDUX INTEGRATION, WILL REWRITE SOON
 * - @mxstbr
 */
import * as React from 'react';
import { DropZoneTarget } from './ItemsTableDragDropZoneTarget';
import * as classnames from 'classnames';
/**
 * class ItemsTableDragDropZone
 */
export class DropZone /*ItemsTableDragDropZone*//*ItemsTableDragDropZone*/  extends React.Component {
    renderPageDrops() {
        const { items, currentPage, pageSize } = this.props;
        const totalPages = Math.ceil(items.count / pageSize);
        const style = { display: totalPages > 1 ? null : 'none' };
        const pages = [];
        for (let i = 0; i < totalPages; i++) {
            const page = i + 1;
            const pageItems = '' + (page * pageSize - (pageSize - 1)) + ' - ' + (page * pageSize);
            const current = (page === currentPage);
            const className = classnames('ItemList__dropzone--page', {
                'is-active': current,
            });
            pages.push(React.createElement(DropZoneTarget, { key: 'page_' + page, page: page, className: className, pageItems: pageItems, pageSize: pageSize, currentPage: currentPage, drag: this.props.drag, dispatch: this.props.dispatch }));
        }
        let cols = this.props.columns.length;
        if (this.props.list.sortable)
            cols++;
        if (!this.props.list.nodelete)
            cols++;
        return (React.createElement("tr", { style: style },
            React.createElement("td", { colSpan: cols },
                React.createElement("div", { className: "ItemList__dropzone" },
                    pages,
                    React.createElement("div", { className: "clearfix" })))));
    }
    render() {
        return this.renderPageDrops();
    }
}
DropZone.displayName = 'ItemsTableDragDropZone';
