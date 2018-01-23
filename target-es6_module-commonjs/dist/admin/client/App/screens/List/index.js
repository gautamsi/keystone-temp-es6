"use strict";
/**
 * The list view is a paginated table of all items in the list. It can show a
 * variety of information about the individual items in columns.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { findDOMNode } from 'react-dom'; // TODO re-implement focus when ready
const numeral = require("numeral");
const react_redux_1 = require("react-redux");
const PropTypes = require("prop-types");
const elemental_1 = require("../../elemental");
const ListFilters_1 = require("./components/Filtering/ListFilters");
const ListHeaderTitle_1 = require("./components/ListHeaderTitle");
const ListHeaderToolbar_1 = require("./components/ListHeaderToolbar");
const ListManagement_1 = require("./components/ListManagement");
const ConfirmationDialog_1 = require("../../shared/ConfirmationDialog");
const CreateForm_1 = require("../../shared/CreateForm");
const FlashMessages_1 = require("../../shared/FlashMessages");
const ItemsTable_1 = require("./components/ItemsTable/ItemsTable");
const UpdateForm_1 = require("./components/UpdateForm");
const string_1 = require("../../../utils/string");
const lists_1 = require("../../../utils/lists");
const queryParams_1 = require("../../../utils/queryParams");
const actions_1 = require("./actions");
const actions_2 = require("../Item/actions");
const ESC_KEY_CODE = 27;
class ListView extends React.Component {
    constructor(props, context) {
        super(props);
        // ==============================
        // HEADER
        // ==============================
        // Called when a new item is created
        this.onCreate = (item) => {
            // Hide the create form
            this.toggleCreateModal(false);
            // Redirect to newly created item path
            const list = this.props.currentList;
            this.context.router.push(`${Keystone.adminPath}/${list.path}/${item.id}`);
        };
        this.createAutocreate = () => {
            const list = this.props.currentList;
            list.createItem(null, (err, data) => {
                if (err) {
                    // TODO Proper error handling
                    alert('Something went wrong, please try again!');
                    console.log(err);
                }
                else {
                    this.context.router.push(`${Keystone.adminPath}/${list.path}/${data.id}`);
                }
            });
        };
        this.updateSearch = (e) => {
            this.props.dispatch(actions_1.setActiveSearch(e.target.value));
        };
        this.handleSearchClear = () => {
            this.props.dispatch(actions_1.setActiveSearch(''));
            // TODO re-implement focus when ready
            // findDOMNode(this.refs.listSearchInput).focus();
        };
        this.handleSearchKey = (e) => {
            // clear on esc
            if (e.which === ESC_KEY_CODE) {
                this.handleSearchClear();
            }
        };
        this.handlePageSelect = (i) => {
            // If the current page index is the same as the index we are intending to pass to redux, bail out.
            if (i === this.props.lists.page.index)
                return;
            return this.props.dispatch(actions_1.setCurrentPage(i));
        };
        this.toggleManageMode = (filter = !this.state.manageMode) => {
            this.setState({
                manageMode: filter,
                checkedItems: {},
            });
        };
        this.toggleUpdateModal = (filter = !this.state.showUpdateForm) => {
            this.setState({
                showUpdateForm: filter,
            });
        };
        this.massDelete = () => {
            const { checkedItems } = this.state;
            const list = this.props.currentList;
            const itemCount = string_1.plural(checkedItems, ('* ' + list.singular.toLowerCase()), ('* ' + list.plural.toLowerCase()));
            const itemIds = Object.keys(checkedItems);
            this.setState({
                confirmationDialog: {
                    isOpen: true,
                    label: 'Delete',
                    body: (React.createElement("div", null,
                        "Are you sure you want to delete ",
                        itemCount,
                        "?",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "This cannot be undone.")),
                    onConfirmation: () => {
                        this.props.dispatch(actions_1.deleteItems(itemIds));
                        this.toggleManageMode();
                        this.removeConfirmationDialog();
                    },
                },
            });
        };
        this.handleManagementSelect = (selection) => {
            if (selection === 'all')
                this.checkAllItems();
            if (selection === 'none')
                this.uncheckAllTableItems();
            if (selection === 'visible')
                this.checkAllTableItems();
            return false;
        };
        // ==============================
        // TABLE
        // ==============================
        this.checkTableItem = (item, e) => {
            e.preventDefault();
            const newCheckedItems = Object.assign({}, this.state.checkedItems);
            const itemId = item.id;
            if (this.state.checkedItems[itemId]) {
                delete newCheckedItems[itemId];
            }
            else {
                newCheckedItems[itemId] = true;
            }
            this.setState({
                checkedItems: newCheckedItems,
            });
        };
        this.deleteTableItem = (item, e) => {
            if (e.altKey) {
                this.props.dispatch(actions_2.deleteItem(item.id));
                return;
            }
            e.preventDefault();
            this.setState({
                confirmationDialog: {
                    isOpen: true,
                    label: 'Delete',
                    body: (React.createElement("div", null,
                        "Are you sure you want to delete ",
                        React.createElement("strong", null, item.name),
                        "?",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "This cannot be undone.")),
                    onConfirmation: () => {
                        this.props.dispatch(actions_2.deleteItem(item.id));
                        this.removeConfirmationDialog();
                    },
                },
            });
        };
        this.removeConfirmationDialog = () => {
            this.setState({
                confirmationDialog: {
                    isOpen: false,
                },
            });
        };
        this.toggleTableWidth = () => {
            this.setState({
                constrainTableWidth: !this.state.constrainTableWidth,
            });
        };
        // ==============================
        // COMMON
        // ==============================
        this.handleSortSelect = (path, inverted) => {
            if (inverted)
                path = '-' + path;
            this.props.dispatch(actions_1.setActiveSort(path));
        };
        this.openCreateModal = () => {
            this.toggleCreateModal(true);
        };
        this.closeCreateModal = () => {
            this.toggleCreateModal(false);
        };
        this.state = {
            confirmationDialog: {
                isOpen: false,
            },
            checkedItems: {},
            constrainTableWidth: true,
            manageMode: false,
            showCreateForm: false,
            showUpdateForm: false,
        };
    }
    componentWillMount() {
        // When we directly navigate to a list without coming from another client
        // side routed page before, we need to initialize the list and parse
        // possibly specified query parameters
        this.props.dispatch(actions_1.selectList(this.props.match.params.listId));
        const isNoCreate = this.props.lists.data[this.props.match.params.listId].nocreate;
        const shouldOpenCreate = this.props.location.search === '?create';
        this.setState({
            showCreateForm: (shouldOpenCreate && !isNoCreate) || Keystone.createFormErrors,
        });
    }
    componentWillReceiveProps(nextProps) {
        // We've opened a new list from the client side routing, so initialize
        // again with the new list id
        const isReady = this.props.lists.ready && nextProps.lists.ready;
        if (isReady && queryParams_1.checkForQueryChange(nextProps, this.props)) {
            this.props.dispatch(actions_1.selectList(nextProps.match.params.listId));
        }
    }
    componentWillUnmount() {
        this.props.dispatch(actions_1.clearCachedQuery());
    }
    massUpdate() {
        // TODO: Implement update multi-item
        console.log('Update ALL the things!');
    }
    renderConfirmationDialog() {
        const props = this.state.confirmationDialog;
        return (React.createElement(ConfirmationDialog_1.ConfirmationDialog, { confirmationLabel: props.label, isOpen: props.isOpen, onCancel: this.removeConfirmationDialog, onConfirmation: props.onConfirmation }, props.body));
    }
    renderManagement() {
        const { checkedItems, manageMode, selectAllItemsLoading } = this.state;
        const { currentList } = this.props;
        return (React.createElement(ListManagement_1.ListManagement, { checkedItemCount: Object.keys(checkedItems).length, handleDelete: this.massDelete, handleSelect: this.handleManagementSelect, handleToggle: () => this.toggleManageMode(!manageMode), isOpen: manageMode, itemCount: this.props.items.count, itemsPerPage: this.props.lists.page.size, nodelete: currentList.nodelete, noedit: currentList.noedit, selectAllItemsLoading: selectAllItemsLoading }));
    }
    renderPagination() {
        const items = this.props.items;
        if (this.state.manageMode || !items.count)
            return;
        const list = this.props.currentList;
        const currentPage = this.props.lists.page.index;
        const pageSize = this.props.lists.page.size;
        return (React.createElement(elemental_1.Pagination, { currentPage: currentPage, onPageSelect: this.handlePageSelect, pageSize: pageSize, plural: list.plural, singular: list.singular, style: { marginBottom: 0 }, total: items.count, limit: 10 }));
    }
    renderHeader() {
        const items = this.props.items;
        const { autocreate, nocreate, plural, singular } = this.props.currentList;
        return (React.createElement(elemental_1.Container, { style: { paddingTop: '2em' } },
            React.createElement(ListHeaderTitle_1.ListHeaderTitle, { activeSort: this.props.active.sort, availableColumns: this.props.currentList.columns, handleSortSelect: this.handleSortSelect, title: `
						${numeral(items.count).format()}
						${string_1.plural(items.count, ' ' + singular, ' ' + plural)}
					` }),
            React.createElement(ListHeaderToolbar_1.ListHeaderToolbar
            // common
            , { 
                // common
                dispatch: this.props.dispatch, list: lists_1.listsByPath[this.props.match.params.listId], 
                // expand
                expandIsActive: !this.state.constrainTableWidth, expandOnClick: this.toggleTableWidth, 
                // create
                createIsAvailable: !nocreate, createListName: singular, createOnClick: autocreate
                    ? this.createAutocreate
                    : this.openCreateModal, 
                // search
                searchHandleChange: this.updateSearch, searchHandleClear: this.handleSearchClear, searchHandleKeyup: this.handleSearchKey, searchValue: this.props.active.search, 
                // filters
                filtersActive: this.props.active.filters, filtersAvailable: this.props.currentList.columns.filter((col) => (col.field && col.field.hasFilterMethod) || col.type === 'heading'), 
                // columns
                columnsActive: this.props.active.columns, columnsAvailable: this.props.currentList.columns }),
            React.createElement(ListFilters_1.ListFilters, { dispatch: this.props.dispatch, filters: this.props.active.filters })));
    }
    checkAllTableItems() {
        const checkedItems = {};
        this.props.items.results.forEach(item => {
            checkedItems[item.id] = true;
        });
        this.setState({
            checkedItems: checkedItems,
        });
    }
    checkAllItems() {
        const checkedItems = Object.assign({}, this.state.checkedItems);
        // Just in case this API call takes a long time, we'll update the select all button with
        // a spinner.
        this.setState({ selectAllItemsLoading: true });
        let self = this;
        this.props.currentList.loadItems({ expandRelationshipFilters: false, filters: {} }, function (err, data) {
            data.results.forEach(item => {
                checkedItems[item.id] = true;
            });
            self.setState({
                checkedItems: checkedItems,
                selectAllItemsLoading: false,
            });
        });
    }
    uncheckAllTableItems() {
        this.setState({
            checkedItems: {},
        });
    }
    toggleCreateModal(visible) {
        this.setState({
            showCreateForm: visible,
        });
    }
    showBlankState() {
        return !this.props.loading
            && !this.props.items.results.length
            && !this.props.active.search
            && !this.props.active.filters.length;
    }
    renderBlankState() {
        const { currentList } = this.props;
        if (!this.showBlankState())
            return null;
        // create and nav directly to the item view, or open the create modal
        const onClick = currentList.autocreate
            ? this.createAutocreate
            : this.openCreateModal;
        // display the button if create allowed
        const button = !currentList.nocreate ? (React.createElement(elemental_1.GlyphButton, { color: "success", glyph: "plus", position: "left", onClick: onClick, "data-e2e-list-create-button": "no-results" },
            "Create ",
            currentList.singular)) : null;
        return (React.createElement(elemental_1.Container, null,
            (this.props.error) ? (React.createElement(FlashMessages_1.FlashMessages, { messages: {
                    error: [{
                            title: "There is a problem with the network, we're trying to reconnect...",
                        }]
                } })) : null,
            React.createElement(elemental_1.BlankState, { heading: `No ${this.props.currentList.plural.toLowerCase()} found...`, style: { marginTop: 40 } }, button)));
    }
    renderActiveState() {
        if (this.showBlankState())
            return null;
        const containerStyle = {
            transition: 'max-width 160ms ease-out',
            msTransition: 'max-width 160ms ease-out',
            MozTransition: 'max-width 160ms ease-out',
            WebkitTransition: 'max-width 160ms ease-out',
            maxWidth: undefined
        };
        if (!this.state.constrainTableWidth) {
            containerStyle.maxWidth = '100%';
        }
        return (React.createElement("div", null,
            this.renderHeader(),
            React.createElement(elemental_1.Container, null,
                React.createElement("div", { style: { height: 35, marginBottom: '1em', marginTop: '1em' } },
                    this.renderManagement(),
                    this.renderPagination(),
                    React.createElement("span", { style: { clear: 'both', display: 'table' } }))),
            React.createElement(elemental_1.Container, { style: containerStyle },
                (this.props.error) ? (React.createElement(FlashMessages_1.FlashMessages, { messages: {
                        error: [{
                                title: "There is a problem with the network, we're trying to reconnect..",
                            }]
                    } })) : null,
                (this.props.loading) ? (React.createElement(elemental_1.Center, { height: "50vh" },
                    React.createElement(elemental_1.Spinner, null))) : (React.createElement("div", null,
                    React.createElement(ItemsTable_1.ItemsTable, { activeSort: this.props.active.sort, checkedItems: this.state.checkedItems, checkTableItem: this.checkTableItem, columns: this.props.active.columns, deleteTableItem: this.deleteTableItem, handleSortSelect: this.handleSortSelect, items: this.props.items, list: this.props.currentList, manageMode: this.state.manageMode, rowAlert: this.props.rowAlert, currentPage: this.props.lists.page.index, pageSize: this.props.lists.page.size, drag: this.props.lists.drag, dispatch: this.props.dispatch }),
                    this.renderNoSearchResults())))));
    }
    renderNoSearchResults() {
        if (this.props.items.results.length)
            return null;
        let matching = this.props.active.search;
        if (this.props.active.filters.length) {
            matching += (matching ? ' and ' : '') + string_1.plural(this.props.active.filters.length, '* filter', '* filters');
        }
        matching = matching ? ' found matching ' + matching : '.';
        return (React.createElement(elemental_1.BlankState, { style: { marginTop: 20, marginBottom: 20 } },
            React.createElement(elemental_1.Glyph, { name: "search", size: "medium", style: { marginBottom: 20 } }),
            React.createElement("h2", { style: { color: 'inherit' } },
                "No ",
                this.props.currentList.plural.toLowerCase(),
                matching)));
    }
    render() {
        if (!this.props.ready) {
            return (React.createElement(elemental_1.Center, { height: "50vh", "data-screen-id": "list" },
                React.createElement(elemental_1.Spinner, null)));
        }
        return (React.createElement("div", { "data-screen-id": "list" },
            this.renderBlankState(),
            this.renderActiveState(),
            React.createElement(CreateForm_1.CreateForm, { err: Keystone.createFormErrors, isOpen: this.state.showCreateForm, list: this.props.currentList, onCancel: this.closeCreateModal, onCreate: this.onCreate }),
            React.createElement(UpdateForm_1.UpdateForm, { isOpen: this.state.showUpdateForm, itemIds: Object.keys(this.state.checkedItems), list: this.props.currentList, onCancel: () => this.toggleUpdateModal(false) }),
            this.renderConfirmationDialog()));
    }
}
ListView.contextTypes = {
    router: PropTypes.object.isRequired,
};
exports.List = react_redux_1.connect((state) => {
    return {
        lists: state.lists,
        loading: state.lists.loading,
        error: state.lists.error,
        currentList: state.lists.currentList,
        items: state.lists.items,
        page: state.lists.page,
        ready: state.lists.ready,
        rowAlert: state.lists.rowAlert,
        active: state.active,
    };
})(ListView);
