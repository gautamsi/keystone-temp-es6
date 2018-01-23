"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const redux = require("react-redux");
const string_1 = require("../../../../utils/string");
const ListTile_1 = require("./ListTile");
class ListsComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: "dashboard-group__lists" }, _.map(this.props.lists, (list, key) => {
            // If an object is passed in the key is the index,
            // if an array is passed in the key is at list.key
            const listKey = list.key || key;
            const href = list.external ? list.path : `${Keystone.adminPath}/${list.path}`;
            const listData = this.props.listsData[list.path];
            const isNoCreate = listData ? listData.nocreate : false;
            return (React.createElement(ListTile_1.ListTile, { key: list.path, path: list.path, label: list.label, hideCreateButton: isNoCreate, href: href, count: string_1.plural(this.props.counts[listKey], '* Item', '* Items'), spinner: this.props.spinner }));
        })));
    }
}
exports.Lists = redux.connect((state) => {
    return {
        listsData: state.lists.data,
    };
})(ListsComponent);
