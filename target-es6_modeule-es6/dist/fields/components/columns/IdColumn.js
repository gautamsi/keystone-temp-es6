import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class IdColumn extends React.Component {
    renderValue() {
        const value = this.props.data.id;
        if (!value)
            return null;
        return (React.createElement(ItemsTableValue, { padded: true, interior: true, title: value, to: Keystone.adminPath + '/' + this.props.list.path + '/' + value, field: this.props.col.type }, value));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
IdColumn.displayName = 'IdColumn';
