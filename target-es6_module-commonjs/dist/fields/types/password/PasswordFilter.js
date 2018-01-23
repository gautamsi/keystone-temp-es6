"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const EXISTS_OPTIONS = [
    { label: 'Is Set', value: true },
    { label: 'Is NOT Set', value: false },
];
class PasswordFilter extends React.Component {
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
        return (React.createElement(elemental_1.SegmentedControl, { equalWidthSegments: true, onChange: this.toggleExists, options: EXISTS_OPTIONS, value: filter.exists }));
    }
}
exports.PasswordFilter = PasswordFilter;
