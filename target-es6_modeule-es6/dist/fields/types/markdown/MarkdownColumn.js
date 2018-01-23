import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class MarkdownColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        return (value && Object.keys(value).length) ? value.md.substr(0, 100) : null;
    }
    render() {
        return (React.createElement(ItemsTableCell, null,
            React.createElement(ItemsTableValue, { field: this.props.col.type }, this.renderValue())));
    }
}
MarkdownColumn.displayName = 'MarkdownColumn';
