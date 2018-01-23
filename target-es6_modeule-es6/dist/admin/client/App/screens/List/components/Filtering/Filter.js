import * as React from 'react';
import { Filters } from 'FieldTypes';
import { Chip } from '../../../../elemental';
import { Popout } from '../../../../shared/Popout';
import { setFilter, clearFilter } from '../../actions';
import { getFilterLabel } from './getFilterLabel';
export class Filter extends React.Component {
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
            dispatch(setFilter(filter.field.path, this.state.filterValue));
            this.close();
            e.preventDefault();
        };
        this.removeFilter = () => {
            this.props.dispatch(clearFilter(this.props.filter.field.path));
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
        const FilterComponent = Filters[filter.field.type];
        return (React.createElement("span", null,
            React.createElement(Chip, { label: getFilterLabel(filter.field, filter.value), onClick: this.open, onClear: this.removeFilter, color: "primary", id: filterId }),
            React.createElement(Popout, { isOpen: this.state.isOpen, onCancel: this.close, relativeToID: filterId },
                React.createElement("form", { onSubmit: this.updateFilter },
                    React.createElement(Popout.Header, { title: "Edit Filter" }),
                    React.createElement(Popout.Body, null,
                        React.createElement(FilterComponent, { field: filter.field, filter: this.state.filterValue, onChange: this.updateValue })),
                    React.createElement(Popout.Footer, { ref: "footer", primaryButtonIsSubmit: true, primaryButtonLabel: "Apply", secondaryButtonAction: this.close, secondaryButtonLabel: "Cancel" })))));
    }
}
