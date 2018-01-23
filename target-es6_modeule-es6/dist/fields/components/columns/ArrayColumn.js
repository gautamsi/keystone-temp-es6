import * as React from 'react';
import { ItemsTableCell } from '../ItemsTableCell';
import { ItemsTableValue } from '../ItemsTableValue';
export class ArrayColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !value.length)
            return null;
        return value.join(', ');
    }
    render() {
        return (React.createElement(ItemsTableCell, null,
            React.createElement(ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
ArrayColumn.displayName = 'ArrayColumn';
