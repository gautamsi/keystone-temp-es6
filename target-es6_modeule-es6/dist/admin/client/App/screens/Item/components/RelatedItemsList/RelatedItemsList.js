import * as React from 'react';
import { Link } from 'react-router-dom';
import { Alert, BlankState, Center, Spinner } from '../../../../elemental';
import { DragDrop } from './RelatedItemsListDragDrop';
import { RelatedItemsListRow as ListRow } from './RelatedItemsListRow';
import { loadRelationshipItemData } from '../../actions';
import { TABLE_CONTROL_COLUMN_WIDTH } from '../../../../../constants';
export class RelatedItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: this.getColumns(),
            err: null,
            items: null,
        };
    }
    componentDidMount() {
        this.__isMounted = true;
        this.loadItems();
    }
    componentWillUnmount() {
        this.__isMounted = false;
    }
    isSortable() {
        // Check if the related items should be sortable. The referenced list has to
        //   be sortable and it has to set the current list as it's sortContext.
        const { refList, list, relationship } = this.props;
        const sortContext = refList.sortContext;
        if (refList.sortable && sortContext) {
            const parts = sortContext.split(':');
            if (parts[0] === list.key && parts[1] === relationship.path) {
                return true;
            }
        }
        return false;
    }
    getColumns() {
        const { relationship, refList } = this.props;
        const columns = refList.expandColumns(refList.defaultColumns);
        return columns.filter(i => i.path !== relationship.refPath);
    }
    loadItems() {
        const { refList, relatedItemId, relationship } = this.props;
        const { columns } = this.state;
        // TODO: Move error to redux store
        if (!refList.fields[relationship.refPath]) {
            const err = (React.createElement(Alert, { color: "danger" },
                React.createElement("strong", null, "Error:"),
                " Related List ",
                React.createElement("strong", null, refList.label),
                " has no field ",
                React.createElement("strong", null, relationship.refPath)));
            return this.setState({ err });
        }
        this.props.dispatch(loadRelationshipItemData({ columns, refList, relatedItemId, relationship }));
    }
    renderItems() {
        const tableBody = (this.isSortable()) ? (React.createElement(DragDrop, Object.assign({ columns: this.state.columns, items: this.props.items }, this.props))) : (React.createElement("tbody", null, this.props.items.results.map((item) => {
            return (React.createElement(ListRow, { key: item.id, columns: this.state.columns, item: item, refList: this.props.refList }));
        })));
        return this.props.items.results.length ? (React.createElement("div", { className: "ItemList-wrapper" },
            React.createElement("table", { cellPadding: "0", cellSpacing: "0", className: "Table ItemList" },
                this.renderTableCols(),
                this.renderTableHeaders(),
                tableBody))) : (React.createElement(BlankState, { heading: `No related ${this.props.refList.plural.toLowerCase()}...`, style: { marginBottom: '3em' } }));
    }
    renderTableCols() {
        const cols = this.state.columns.map((col) => React.createElement("col", { width: col.width, key: col.path }));
        return React.createElement("colgroup", null, cols);
    }
    renderTableHeaders() {
        const cells = this.state.columns.map((col) => {
            return React.createElement("th", { key: col.path }, col.label);
        });
        // add sort col when available
        if (this.isSortable()) {
            cells.unshift(React.createElement("th", { width: TABLE_CONTROL_COLUMN_WIDTH, key: "sortable" }));
        }
        return React.createElement("thead", null,
            React.createElement("tr", null, cells));
    }
    render() {
        if (this.state.err) {
            return React.createElement("div", { className: "Relationship" }, this.state.err);
        }
        const listHref = `${Keystone.adminPath}/${this.props.refList.path}`;
        const loadingElement = (React.createElement(Center, { height: 100 },
            React.createElement(Spinner, null)));
        return (React.createElement("div", { className: "Relationship" },
            React.createElement("h3", { className: "Relationship__link" },
                React.createElement(Link, { to: listHref }, this.props.refList.label)),
            this.props.items ? this.renderItems() : loadingElement));
    }
}
