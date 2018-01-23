import * as React from 'react';
import * as classnames from 'classnames';
import { TableRow } from './ItemsTableRow';
import { DragDrop } from './ItemsTableDragDrop';
import { TABLE_CONTROL_COLUMN_WIDTH } from '../../../../../constants';
export class ItemsTable extends React.Component {
    renderCols() {
        let cols = this.props.columns.map(col => (React.createElement("col", { key: col.path, width: col.width })));
        // add delete col when available
        if (!this.props.list.nodelete) {
            cols.unshift(React.createElement("col", { width: TABLE_CONTROL_COLUMN_WIDTH, key: "delete" }));
        }
        // add sort col when available
        if (this.props.list.sortable) {
            cols.unshift(React.createElement("col", { width: TABLE_CONTROL_COLUMN_WIDTH, key: "sortable" }));
        }
        return (React.createElement("colgroup", null, cols));
    }
    renderHeaders() {
        let listControlCount = 0;
        if (this.props.list.sortable)
            listControlCount++;
        if (!this.props.list.nodelete)
            listControlCount++;
        // set active sort
        const activeSortPath = this.props.activeSort.paths[0];
        // pad first col when controls are available
        const cellPad = listControlCount ? (React.createElement("th", { colSpan: listControlCount })) : null;
        // map each heading column
        const cellMap = this.props.columns.map(col => {
            const isSelected = activeSortPath && activeSortPath.path === col.path;
            const isInverted = isSelected && activeSortPath.invert;
            const buttonTitle = `Sort by ${col.label}${isSelected && !isInverted ? ' (desc)' : ''}`;
            const colClassName = classnames('ItemList__sort-button th-sort', {
                'th-sort--asc': isSelected && !isInverted,
                'th-sort--desc': isInverted,
            });
            return (React.createElement("th", { key: col.path, colSpan: 1 },
                React.createElement("button", { className: colClassName, onClick: () => {
                        this.props.handleSortSelect(col.path, isSelected && !isInverted);
                    }, title: buttonTitle },
                    col.label,
                    React.createElement("span", { className: "th-sort__icon" }))));
        });
        return (React.createElement("thead", null,
            React.createElement("tr", null,
                cellPad,
                cellMap)));
    }
    render() {
        const { items } = this.props;
        if (!items.results.length)
            return null;
        const tableBody = (this.props.list.sortable) ? (React.createElement(DragDrop, Object.assign({}, this.props))) : (React.createElement("tbody", null, items.results.map((item, i) => {
            return (React.createElement(TableRow, Object.assign({ key: item.id, deleteTableItem: this.props.deleteTableItem, index: i, sortOrder: item.sortOrder || 0, id: item.id, item: item }, this.props)));
        })));
        return (React.createElement("div", { className: "ItemList-wrapper" },
            React.createElement("table", { cellPadding: "0", cellSpacing: "0", className: "Table ItemList" },
                this.renderCols(),
                this.renderHeaders(),
                tableBody)));
    }
}
