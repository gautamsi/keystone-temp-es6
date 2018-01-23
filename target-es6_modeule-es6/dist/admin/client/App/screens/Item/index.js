/**
 * Item View
 *
 * This is the item view, it is rendered when users visit a page of a specific
 * item. This mainly renders the form to edit the item content in.
 */
import * as React from 'react';
import { Alert, Container, Center, Spinner } from '../../elemental';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listsByKey } from '../../../utils/lists';
import { CreateForm } from '../../shared/CreateForm';
import { EditForm } from './components/EditForm';
import { EditFormHeader } from './components/EditFormHeader';
import { RelatedItemsList } from './components/RelatedItemsList/RelatedItemsList';
// import FlashMessages from '../../shared/FlashMessages';
import { selectItem, loadItemData, } from './actions';
import { selectList, } from '../List/actions';
class ItemView extends React.Component {
    constructor(props) {
        super(props);
        // Called when a new item is created
        this.onCreate = (item) => {
            // Hide the create form
            this.toggleCreateModal(false);
            // Redirect to newly created item path
            const list = this.props.currentList;
            this.context.router.push(`${Keystone.adminPath}/${list.path}/${item.id}`);
        };
        // Open and close the create new item modal
        this.toggleCreateModal = (visible) => {
            this.setState({
                createIsOpen: visible,
            });
        };
        this.state = {
            createIsOpen: false,
        };
    }
    componentDidMount() {
        // When we directly navigate to an item without coming from another client
        // side routed page before, we need to select the list before initializing the item
        // We also need to update when the list id has changed
        if (!this.props.currentList || this.props.currentList.id !== this.props.match.params.listId) {
            this.props.dispatch(selectList(this.props.match.params.listId));
        }
        this.initializeItem(this.props.match.params.itemId);
    }
    componentWillReceiveProps(nextProps) {
        // We've opened a new item from the client side routing, so initialize
        // again with the new item id
        if (nextProps.match.params.itemId !== this.props.match.params.itemId) {
            this.props.dispatch(selectList(nextProps.match.params.listId));
            this.initializeItem(nextProps.match.params.itemId);
        }
    }
    // Initialize an item
    initializeItem(itemId) {
        this.props.dispatch(selectItem(itemId));
        this.props.dispatch(loadItemData());
    }
    // Render this items relationships
    renderRelationships() {
        const { relationships } = this.props.currentList;
        const keys = Object.keys(relationships);
        if (!keys.length)
            return;
        return (React.createElement("div", { className: "Relationships" },
            React.createElement(Container, null,
                React.createElement("h2", null, "Relationships"),
                keys.map(key => {
                    const relationship = relationships[key];
                    const refList = listsByKey[relationship.ref];
                    const { currentList, match, relationshipData, drag } = this.props;
                    return (React.createElement(RelatedItemsList, { key: relationship.path, list: currentList, refList: refList, relatedItemId: match.params.itemId, relationship: relationship, items: relationshipData[relationship.path], dragNewSortOrder: drag.newSortOrder, dispatch: this.props.dispatch }));
                }))));
    }
    // Handle errors
    handleError(error) {
        const detail = error.detail;
        if (detail) {
            // Item not found
            if (detail.name === 'CastError'
                && detail.path === '_id') {
                return (React.createElement(Container, null,
                    React.createElement(Alert, { color: "danger", style: { marginTop: '2em' } },
                        "No item matching id \"",
                        this.props.routeParams.itemId,
                        "\".\u00A0",
                        React.createElement(Link, { to: `${Keystone.adminPath}/${this.props.routeParams.listId}` },
                            "Go back to ",
                            this.props.routeParams.listId,
                            "?"))));
            }
        }
        if (error.message) {
            // Server down + possibly other errors
            if (error.message === 'Internal XMLHttpRequest Error') {
                return (React.createElement(Container, null,
                    React.createElement(Alert, { color: "danger", style: { marginTop: '2em' } }, "We encountered some network problems, please refresh.")));
            }
        }
        return (React.createElement(Container, null,
            React.createElement(Alert, { color: "danger", style: { marginTop: '2em' } }, "An unknown error has ocurred, please refresh.")));
    }
    render() {
        // If we don't have any data yet, show the loading indicator
        if (!this.props.ready) {
            return (React.createElement(Center, { height: "50vh", "data-screen-id": "item" },
                React.createElement(Spinner, null)));
        }
        // When we have the data, render the item view with it
        return (React.createElement("div", { "data-screen-id": "item" }, (this.props.error) ? this.handleError(this.props.error) : (React.createElement("div", null,
            React.createElement(Container, null,
                React.createElement(EditFormHeader, { list: this.props.currentList, data: this.props.data, toggleCreate: this.toggleCreateModal }),
                React.createElement(CreateForm, { list: this.props.currentList, isOpen: this.state.createIsOpen, onCancel: () => this.toggleCreateModal(false), onCreate: (item) => this.onCreate(item) }),
                React.createElement(EditForm, { list: this.props.currentList, data: this.props.data, dispatch: this.props.dispatch, router: this.context.router })),
            this.renderRelationships()))));
    }
}
ItemView.displayName = 'ItemView';
export const Item = connect((state) => ({
    data: state.item.data,
    loading: state.item.loading,
    ready: state.item.ready,
    error: state.item.error,
    currentList: state.lists.currentList,
    relationshipData: state.item.relationshipData,
    drag: state.item.drag,
}))(ItemView);
