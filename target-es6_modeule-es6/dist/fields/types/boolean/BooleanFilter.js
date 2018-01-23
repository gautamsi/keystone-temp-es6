import * as React from 'react';
import { SegmentedControl } from '../../../admin/client/App/elemental';
const VALUE_OPTIONS = [
    { label: 'Is Checked', value: true },
    { label: 'Is NOT Checked', value: false },
];
export class BooleanFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.updateValue = (value) => {
            this.props.onChange({ value });
        };
    }
    static getDefaultValue() {
        return {
            value: true,
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    render() {
        return React.createElement(SegmentedControl, { equalWidthSegments: true, options: VALUE_OPTIONS, value: this.props.filter.value, onChange: this.updateValue });
    }
}
