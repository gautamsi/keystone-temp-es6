import * as React from 'react';
import { Checkbox } from '../../components/Checkbox';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class BooleanColumn extends React.Component {
    renderValue() {
        return (React.createElement(ItemsTableValue, { truncate: false, field: this.props.col.type },
            React.createElement(Checkbox, { readonly: true, checked: this.props.data.fields[this.props.col.path] })));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
BooleanColumn.displayName = 'BooleanColumn';
