import * as _ from 'lodash';
import * as async from 'async';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as xhr from 'xhr';
import { FormField, FormInput, SegmentedControl, } from '../../../admin/client/App/elemental';
import { PopoutList } from '../../../admin/client/App/shared/Popout/PopoutList';
const INVERTED_OPTIONS = [
    { label: 'Linked To', value: false },
    { label: 'NOT Linked To', value: true },
];
export class RelationshipFilter extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInverted = (inverted) => {
            this.updateFilter({ inverted });
        };
        this.updateSearch = (e) => {
            this.setState({ searchString: e.target.value }, this.loadSearchResults);
        };
        this.selectItem = (item) => {
            const value = this.props.filter.value.concat(item.id);
            this.updateFilter({ value });
        };
        this.removeItem = (item) => {
            const value = this.props.filter.value.filter(i => { return i !== item.id; });
            this.updateFilter({ value });
        };
        this.state = {
            searchIsLoading: false,
            searchResults: [],
            searchString: '',
            selectedItems: [],
            valueIsLoading: true,
        };
    }
    static getDefaultValue() {
        return {
            inverted: INVERTED_OPTIONS[0].value,
            value: [],
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    componentDidMount() {
        this._itemsCache = {};
        this.loadSearchResults(true);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.filter.value !== this.props.filter.value) {
            this.populateValue(nextProps.filter.value);
        }
    }
    isLoading() {
        return this.state.searchIsLoading || this.state.valueIsLoading;
    }
    populateValue(value) {
        async.map(value, (id, next) => {
            if (this._itemsCache[id])
                return next(null, this._itemsCache[id]);
            xhr({
                url: Keystone.adminPath + '/api/' + this.props.field.refList.path + '/' + id + '?basic',
                responseType: 'json',
            }, (err, resp, data) => {
                if (err || !data)
                    return next(err);
                this.cacheItem(data);
                next(err, data);
            });
        }, (err, items) => {
            if (err) {
                // TODO: Handle errors better
                console.error('Error loading items:', err);
            }
            this.setState({
                valueIsLoading: false,
                selectedItems: items || [],
            }, () => {
                findDOMNode(this.refs.focusTarget).focus();
            });
        });
    }
    cacheItem(item) {
        this._itemsCache[item.id] = item;
    }
    buildFilters() {
        let filters = {};
        _.forEach(this.props.field.filters, (value, key) => {
            if (value[0] === ':')
                return;
            filters[key] = value;
        });
        let parts = [];
        _.forEach(filters, function (val, key) {
            parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
        });
        return parts.join('&');
    }
    loadSearchResults(thenPopulateValue) {
        const searchString = this.state.searchString;
        const filters = this.buildFilters();
        xhr({
            url: Keystone.adminPath + '/api/' + this.props.field.refList.path + '?basic&search=' + searchString + '&' + filters,
            responseType: 'json',
        }, (err, resp, data) => {
            if (err) {
                // TODO: Handle errors better
                console.error('Error loading items:', err);
                this.setState({
                    searchIsLoading: false,
                });
                return;
            }
            data.results.forEach(this.cacheItem.bind(this));
            if (thenPopulateValue) {
                this.populateValue(this.props.filter.value);
            }
            if (searchString !== this.state.searchString)
                return;
            this.setState({
                searchIsLoading: false,
                searchResults: data.results,
            }, this.updateHeight);
        });
    }
    updateHeight() {
        if (this.props.onHeightChange) {
            this.props.onHeightChange(this.refs.container.offsetHeight);
        }
    }
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    renderItems(items, selected) {
        const itemIconHover = selected ? 'x' : 'check';
        return items.map((item, i) => {
            return (React.createElement(PopoutList.Item, { key: `item-${i}-${item.id}`, icon: "dash", iconHover: itemIconHover, label: item.name, onClick: () => {
                    if (selected)
                        this.removeItem(item);
                    else
                        this.selectItem(item);
                } }));
        });
    }
    render() {
        const selectedItems = this.state.selectedItems;
        const searchResults = this.state.searchResults.filter(i => {
            return this.props.filter.value.indexOf(i.id) === -1;
        });
        const placeholder = this.isLoading() ? 'Loading...' : 'Find a ' + this.props.field.label + '...';
        return (React.createElement("div", { ref: "container" },
            React.createElement(FormField, null,
                React.createElement(SegmentedControl, { equalWidthSegments: true, options: INVERTED_OPTIONS, value: this.props.filter.inverted, onChange: this.toggleInverted })),
            React.createElement(FormField, { style: { borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: '1em' } },
                React.createElement(FormInput, { autoFocus: true, ref: "focusTarget", value: this.state.searchString, onChange: this.updateSearch, placeholder: placeholder })),
            selectedItems.length ? (React.createElement(PopoutList, null,
                React.createElement(PopoutList.Heading, null, "Selected"),
                this.renderItems(selectedItems, true))) : null,
            searchResults.length ? (React.createElement(PopoutList, null,
                React.createElement(PopoutList.Heading, { style: selectedItems.length ? { marginTop: '2em' } : null }, "Items"),
                this.renderItems(searchResults))) : null));
    }
}
