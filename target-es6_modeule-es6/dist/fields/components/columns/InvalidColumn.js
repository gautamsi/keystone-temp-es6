import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class InvalidColumn extends React.Component {
    renderValue() {
        return (React.createElement(ItemsTableValue, { field: this.props.col.type },
            "(Invalid Type: ",
            this.props.col.type,
            ")"));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
InvalidColumn.displayName = 'InvalidColumn';
