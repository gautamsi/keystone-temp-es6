import * as async from 'async';
import { listsByKey } from '../../../admin/client/utils/lists';
import * as React from 'react';
import Select from 'react-select';
import * as xhr from 'xhr';
import { Button, FormInput, InputGroup as Group, InputGroupSection as Section, } from '../../../admin/client/App/elemental';
import * as _ from 'lodash';
import { FieldBase } from '../FieldBase';
function compareValues(current, next) {
    const currentLength = current ? current.length : 0;
    const nextLength = next ? next.length : 0;
    if (currentLength !== nextLength)
        return false;
    for (let i = 0; i < currentLength; i++) {
        if (current[i] !== next[i])
            return false;
    }
    return true;
}
export class RelationshipField extends FieldBase {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.loadOptions = (input, callback) => {
            // NOTE: this seems like the wrong way to add options to the Select
            this.loadOptionsCallback = callback.bind(this);
            const filters = this.buildFilters();
            xhr({
                url: Keystone.adminPath + '/api/' + this.props.refList.path + '?basic&search=' + input + '&' + filters,
                responseType: 'json',
            }, (err, resp, data) => {
                if (err) {
                    console.error('Error loading items:', err);
                    return callback(null, []);
                }
                data.results.forEach(this.cacheItem.bind(this));
                callback(null, {
                    options: data.results,
                    complete: data.results.length === data.count,
                });
            });
        };
        this.valueChanged = (value) => {
            this.props.onChange({
                path: this.props.path,
                value: value,
            });
        };
        this.openCreate = () => {
            this.setState({
                createIsOpen: true,
            });
        };
        this.closeCreate = () => {
            this.setState({
                createIsOpen: false,
            });
        };
        this.onCreate = (item) => {
            this.cacheItem(item);
            if (Array.isArray(this.state.value)) {
                // For many relationships, append the new item to the end
                const values = this.state.value.map((item) => item.id);
                values.push(item.id);
                this.valueChanged(values.join(','));
            }
            else {
                this.valueChanged(item.id);
            }
            // NOTE: this seems like the wrong way to add options to the Select
            this.loadOptionsCallback(null, {
                complete: true,
                options: Object.keys(this._itemsCache).map((k) => this._itemsCache[k]),
            });
            this.closeCreate();
        };
        this.state = {
            value: null,
            createIsOpen: false,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        this._itemsCache = {};
        this.loadValue(this.props.value);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value === this.props.value || nextProps.many && compareValues(this.props.value, nextProps.value))
            return;
        this.loadValue(nextProps.value);
    }
    shouldCollapse() {
        if (this.props.many) {
            // many:true relationships have an Array for a value
            return this.props.collapse && !this.props.value.length;
        }
        return this.props.collapse && !this.props.value;
    }
    buildFilters() {
        let filters = {};
        _.forEach(this.props.filters, (value, key) => {
            if (typeof value === 'string' && value[0] === ':') {
                let fieldName = value.slice(1);
                let val = this.props.values[fieldName];
                if (val) {
                    filters[key] = val;
                    return;
                }
                // check if filtering by id and item was already saved
                if (fieldName === '_id' && Keystone.item) {
                    filters[key] = Keystone.item.id;
                    return;
                }
            }
            else {
                filters[key] = value;
            }
        });
        let parts = [];
        _.forEach(filters, function (val, key) {
            parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
        });
        return parts.join('&');
    }
    cacheItem(item) {
        item.href = Keystone.adminPath + '/' + this.props.refList.path + '/' + item.id;
        this._itemsCache[item.id] = item;
    }
    loadValue(values) {
        if (!values) {
            return this.setState({
                loading: false,
                value: null,
            });
        }
        values = Array.isArray(values) ? values : values.split(',');
        const cachedValues = values.map(i => this._itemsCache[i]).filter(i => i);
        if (cachedValues.length === values.length) {
            this.setState({
                loading: false,
                value: this.props.many ? cachedValues : cachedValues[0],
            });
            return;
        }
        this.setState({
            loading: true,
            value: null,
        });
        async.map(values, (value, done) => {
            xhr({
                url: Keystone.adminPath + '/api/' + this.props.refList.path + '/' + value + '?basic',
                responseType: 'json',
            }, (err, resp, data) => {
                if (err || !data)
                    return done(err);
                this.cacheItem(data);
                done(err, data);
            });
        }, (err, expanded) => {
            if (!this._isMounted)
                return;
            this.setState({
                loading: false,
                value: this.props.many ? expanded : expanded[0],
            });
        });
    }
    // NOTE: this seems like the wrong way to add options to the Select
    loadOptionsCallback(...args) { }
    renderSelect(noedit) {
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", style: { position: 'absolute', width: 1, height: 1, zIndex: -1, opacity: 0 }, tabIndex: -1 }),
            React.createElement(Select.Async, { multi: this.props.many, disabled: noedit, loadOptions: this.loadOptions, labelKey: "name", name: this.getInputName(this.props.path), onChange: this.valueChanged, simpleValue: true, value: this.state.value, valueKey: "id" })));
    }
    renderInputGroup() {
        // TODO: find better solution
        //   when importing the CreateForm using: import CreateForm from '../../../admin/client/App/shared/CreateForm';
        //   CreateForm was imported as a blank object. This stack overflow post suggested lazilly requiring it:
        // http://stackoverflow.com/questions/29807664/cyclic-dependency-returns-empty-object-in-react-native
        // TODO: Implement this somewhere higher in the app, it breaks the encapsulation of the RelationshipField component
        const CreateForm = require('../../../admin/client/App/shared/CreateForm');
        return (React.createElement(Group, { block: true },
            React.createElement(Section, { grow: true }, this.renderSelect()),
            React.createElement(Section, null,
                React.createElement(Button, { onClick: this.openCreate }, "+")),
            React.createElement(CreateForm, { list: listsByKey[this.props.refList.key], isOpen: this.state.createIsOpen, onCreate: this.onCreate, onCancel: this.closeCreate })));
    }
    renderValue() {
        const { many } = this.props;
        const { value } = this.state;
        const props = {
            children: value ? value.name : null,
            component: value ? 'a' : 'span',
            href: value ? value.href : null,
            noedit: true,
        };
        return many ? this.renderSelect(true) : React.createElement(FormInput, Object.assign({}, props));
    }
    renderField() {
        if (this.props.createInline) {
            return this.renderInputGroup();
        }
        else {
            return this.renderSelect();
        }
    }
}
RelationshipField.displayName = 'RelationshipField';
RelationshipField.type = 'Relationship';