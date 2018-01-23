import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class LocalFileColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || !value.filename)
            return;
        return value.filename;
    }
    render() {
        let value = this.props.data.fields[this.props.col.path];
        let href = value && value.url ? value.url : null;
        let label = value && value.filename ? value.filename : null;
        return (React.createElement(ItemsTableCell, { href: href, padded: true, interior: true, field: this.props.col.type },
            React.createElement(ItemsTableValue, null, label)));
    }
}
