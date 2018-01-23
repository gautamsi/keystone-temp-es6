import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class GeoPointColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value || !value.length)
            return null;
        const formattedValue = `${value[1]}, ${value[0]}`;
        const formattedTitle = `Lat: ${value[1]} Lng: ${value[0]}`;
        return (React.createElement(ItemsTableValue, { title: formattedTitle, field: this.props.col.type }, formattedValue));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
GeoPointColumn.displayName = 'GeoPointColumn';
