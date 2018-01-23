import * as React from 'react';
import { CloudinaryImageSummary } from '../../components/columns/CloudinaryImageSummary';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class CloudinaryImageColumn extends React.Component {
    renderValue() {
        let value = this.props.data.fields[this.props.col.path];
        if (!value || !Object.keys(value).length)
            return;
        return (React.createElement(ItemsTableValue, { field: this.props.col.type },
            React.createElement(CloudinaryImageSummary, { label: "dimensions", image: value, secure: this.props.col.field.secure })));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
CloudinaryImageColumn.displayName = 'CloudinaryImageColumn';
