import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class PasswordColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        return value ? '********' : '';
    }
    render() {
        return (React.createElement(ItemsTableCell, null,
            React.createElement(ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
PasswordColumn.displayName = 'PasswordColumn';
