"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_domify_1 = require("react-domify");
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const Col_1 = require("./Col");
const Row_1 = require("./Row");
class ExplorerFieldType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: this.props.FilterComponent.getDefaultValue(),
            value: this.props.value,
        };
    }
    onFieldChange(e) {
        let logValue = typeof e.value === 'string' ? `"${e.value}"` : e.value;
        console.log(`${this.props.FieldComponent.type} field value changed:`, logValue);
        this.setState({
            value: e.value,
        });
    }
    onFilterChange(value) {
        console.log(`${this.props.FieldComponent.type} filter value changed:`, value);
        this.setState({
            filter: value,
        });
    }
    render() {
        const { FieldComponent, FilterComponent, readmeIsVisible, spec } = this.props;
        const className = this.props.i ? 'fx-page__field__bordered' : undefined;
        return (React.createElement("div", { className: className },
            React.createElement(elemental_1.Form, { variant: "horizontal", component: "div" },
                React.createElement(Row_1.ExplorerRow, { isCollapsed: readmeIsVisible },
                    React.createElement(Col_1.ExplorerCol, { width: readmeIsVisible ? 300 : null, style: { minWidth: 300, maxWidth: 640 } },
                        React.createElement(FieldComponent, Object.assign({}, spec, { onChange: this.onFieldChange, value: this.state.value }))),
                    React.createElement(Col_1.ExplorerCol, null,
                        React.createElement(react_domify_1.default, { className: "Domify", value: { value: this.state.value } })))),
            React.createElement("div", { className: "fx-page__filter" },
                React.createElement("div", { className: "fx-page__filter__title" }, "Filter"),
                React.createElement(Row_1.ExplorerRow, null,
                    React.createElement(Col_1.ExplorerCol, { width: 300 },
                        React.createElement(FilterComponent, { field: spec, filter: this.state.filter, onChange: this.onFilterChange })),
                    React.createElement(Col_1.ExplorerCol, null,
                        React.createElement("div", { style: { marginLeft: 30 } },
                            React.createElement(react_domify_1.default, { className: "Domify", value: this.state.filter })))))));
    }
}
exports.ExplorerFieldType = ExplorerFieldType;
