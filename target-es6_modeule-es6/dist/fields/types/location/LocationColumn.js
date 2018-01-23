import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
const SUB_FIELDS = ['street1', 'suburb', 'state', 'postcode', 'country'];
export class LocationColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !Object.keys(value).length)
            return null;
        const output = [];
        SUB_FIELDS.map((i) => {
            if (value[i]) {
                output.push(value[i]);
            }
        });
        return (React.createElement(ItemsTableValue, { field: this.props.col.type, title: output.join(', ') }, output.join(', ')));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
LocationColumn.displayName = 'LocationColumn';
