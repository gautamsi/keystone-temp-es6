import * as React from 'react';
import { SegmentedControl } from '../../../admin/client/App/elemental';
const EXISTS_OPTIONS = [
    { label: 'Is Set', value: true },
    { label: 'Is NOT Set', value: false },
];
export class PasswordFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.toggleExists = (value) => {
            this.props.onChange({ exists: value });
        };
    }
    static getDefaultValue() {
        return {
            exists: true,
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    render() {
        const { filter } = this.props;
        return (React.createElement(SegmentedControl, { equalWidthSegments: true, onChange: this.toggleExists, options: EXISTS_OPTIONS, value: filter.exists }));
    }
}
