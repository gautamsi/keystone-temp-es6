import * as React from 'react';
import * as numeral from 'numeral';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class NumberColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || isNaN(value))
            return null;
        const formattedValue = (this.props.col.path === 'money') ? numeral(value).format('$0,0.00') : value;
        return formattedValue;
    }
    render() {
        return (React.createElement(ItemsTableCell, null,
            React.createElement(ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
NumberColumn.displayName = 'NumberColumn';
