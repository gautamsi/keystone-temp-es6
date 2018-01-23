import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
import * as displayName from 'display-name';
export class NameColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || (!value.first && !value.last))
            return '(no name)';
        return displayName(value.first, value.last);
    }
    render() {
        return (React.createElement(ItemsTableCell, null,
            React.createElement(ItemsTableValue, { to: this.props.linkTo, padded: true, interior: true, field: this.props.col.type }, this.renderValue())));
    }
}
NameColumn.displayName = 'NameColumn';
