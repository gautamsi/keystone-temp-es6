import Domify from 'react-domify';
import * as React from 'react';
import { Form } from '../../../admin/client/App/elemental';
import { ExplorerCol as Col } from './Col';
import { ExplorerRow as Row } from './Row';
export class ExplorerFieldType extends React.Component {
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
            React.createElement(Form, { variant: "horizontal", component: "div" },
                React.createElement(Row, { isCollapsed: readmeIsVisible },
                    React.createElement(Col, { width: readmeIsVisible ? 300 : null, style: { minWidth: 300, maxWidth: 640 } },
                        React.createElement(FieldComponent, Object.assign({}, spec, { onChange: this.onFieldChange, value: this.state.value }))),
                    React.createElement(Col, null,
                        React.createElement(Domify, { className: "Domify", value: { value: this.state.value } })))),
            React.createElement("div", { className: "fx-page__filter" },
                React.createElement("div", { className: "fx-page__filter__title" }, "Filter"),
                React.createElement(Row, null,
                    React.createElement(Col, { width: 300 },
                        React.createElement(FilterComponent, { field: spec, filter: this.state.filter, onChange: this.onFilterChange })),
                    React.createElement(Col, null,
                        React.createElement("div", { style: { marginLeft: 30 } },
                            React.createElement(Domify, { className: "Domify", value: this.state.filter })))))));
    }
}
