import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
const moreIndicatorStyle = {
    color: '#bbb',
    fontSize: '.8rem',
    fontWeight: 500,
    marginLeft: 8,
};
export class RelationshipColumn extends React.Component {
    renderMany(value) {
        if (!value || !value.length)
            return;
        const refList = this.props.col.field.refList;
        const items = [];
        for (let i = 0; i < 3; i++) {
            if (!value[i])
                break;
            if (i) {
                items.push(React.createElement("span", { key: 'comma' + i }, ", "));
            }
            items.push(React.createElement(ItemsTableValue, { interior: true, truncate: false, key: 'anchor' + i, to: Keystone.adminPath + '/' + refList.path + '/' + value[i].id }, value[i].name));
        }
        if (value.length > 3) {
            items.push(React.createElement("span", { key: "more", style: moreIndicatorStyle },
                "[...",
                value.length - 3,
                " more]"));
        }
        return (React.createElement(ItemsTableValue, { field: this.props.col.type }, items));
    }
    renderValue(value) {
        if (!value)
            return;
        const refList = this.props.col.field.refList;
        return (React.createElement(ItemsTableValue, { to: Keystone.adminPath + '/' + refList.path + '/' + value.id, padded: true, interior: true, field: this.props.col.type }, value.name));
    }
    render() {
        const value = this.props.data.fields[this.props.col.path];
        const many = this.props.col.field.many;
        return (React.createElement(ItemsTableCell, null, many ? this.renderMany(value) : this.renderValue(value)));
    }
}
RelationshipColumn.displayName = 'RelationshipColumn';
