"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FieldTypes_1 = require("FieldTypes");
const elemental_1 = require("../../../../elemental");
const Popout_1 = require("../../../../shared/Popout");
const actions_1 = require("../../actions");
const getFilterLabel_1 = require("./getFilterLabel");
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.open = () => {
            this.setState({
                isOpen: true,
                filterValue: this.props.filter.value,
            });
        };
        this.close = () => {
            this.setState({
                isOpen: false,
            });
        };
        this.updateValue = (filterValue) => {
            this.setState({
                filterValue: filterValue,
            });
        };
        this.updateFilter = (e) => {
            const { dispatch, filter } = this.props;
            dispatch(actions_1.setFilter(filter.field.path, this.state.filterValue));
            this.close();
            e.preventDefault();
        };
        this.removeFilter = () => {
            this.props.dispatch(actions_1.clearFilter(this.props.filter.field.path));
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    render() {
        const { filter } = this.props;
        const filterId = `activeFilter__${filter.field.path}`;
        const FilterComponent = FieldTypes_1.Filters[filter.field.type];
        return (React.createElement("span", null,
            React.createElement(elemental_1.Chip, { label: getFilterLabel_1.getFilterLabel(filter.field, filter.value), onClick: this.open, onClear: this.removeFilter, color: "primary", id: filterId }),
            React.createElement(Popout_1.Popout, { isOpen: this.state.isOpen, onCancel: this.close, relativeToID: filterId },
                React.createElement("form", { onSubmit: this.updateFilter },
                    React.createElement(Popout_1.Popout.Header, { title: "Edit Filter" }),
                    React.createElement(Popout_1.Popout.Body, null,
                        React.createElement(FilterComponent, { field: filter.field, filter: this.state.filterValue, onChange: this.updateValue })),
                    React.createElement(Popout_1.Popout.Footer, { ref: "footer", primaryButtonIsSubmit: true, primaryButtonLabel: "Apply", secondaryButtonAction: this.close, secondaryButtonLabel: "Cancel" })))));
    }
}
exports.Filter = Filter;
