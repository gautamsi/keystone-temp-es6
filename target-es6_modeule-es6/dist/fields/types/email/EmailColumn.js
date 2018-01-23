import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class EmailColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value)
            return;
        return (React.createElement(ItemsTableValue, { to: 'mailto:' + value, padded: true, exterior: true, field: this.props.col.type }, value));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
EmailColumn.displayName = 'EmailColumn';
