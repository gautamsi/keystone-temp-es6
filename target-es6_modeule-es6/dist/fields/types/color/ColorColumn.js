import * as React from 'react';
import { ItemsTableCell } from '../../components/ItemsTableCell';
import { ItemsTableValue } from '../../components/ItemsTableValue';
export class ColorColumn extends React.Component {
    renderValue() {
        const value = this.props.data.fields[this.props.col.path];
        if (!value)
            return null;
        const colorBoxStyle = {
            backgroundColor: value,
            borderRadius: 3,
            display: 'inline-block',
            height: 18,
            marginRight: 10,
            verticalAlign: 'middle',
            width: 18,
        };
        return (React.createElement(ItemsTableValue, { truncate: false, field: this.props.col.type },
            React.createElement("div", { style: { lineHeight: '18px' } },
                React.createElement("span", { style: colorBoxStyle }),
                React.createElement("span", { style: { display: 'inline-block', verticalAlign: 'middle' } }, value))));
    }
    render() {
        return (React.createElement(ItemsTableCell, null, this.renderValue()));
    }
}
ColorColumn.displayName = 'ColorColumn';
