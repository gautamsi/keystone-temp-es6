import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Popout } from '../../../../shared/Popout';
import { Filters } from 'FieldTypes';
export class ListFiltersAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.updateHeight = (bodyHeight) => {
            bodyHeight += 40; // TODO: remove magic number, currently accounts for padding
            const footerHeight = findDOMNode(this.refs.footer).offsetHeight;
            const maxBodyHeight = this.props.maxHeight - footerHeight;
            const newHeight = bodyHeight + footerHeight;
            // console.log(bodyHeight, maxBodyHeight, '|', newHeight, this.props.maxHeight);
            this.setState({
                bodyHeight: Math.min(bodyHeight, maxBodyHeight),
            }, () => {
                this.props.onHeightChange(Math.min(newHeight, this.props.maxHeight));
            });
        };
        this.updateValue = (filterValue) => {
            this.setState({
                filterValue: filterValue,
            });
        };
        this.handleFormSubmit = (e) => {
            e.preventDefault();
            this.props.onApply(this.state.filterValue);
        };
        const filterComponent = Filters[this.props.field.type];
        let filterValue = this.props.activeFilters.filter(i => i.field.path === this.props.field.path)[0];
        if (filterValue) {
            filterValue = filterValue.value;
        }
        else {
            filterValue = filterComponent && filterComponent.getDefaultValue ? filterComponent.getDefaultValue() : {};
        }
        this.state = {
            filterComponent: filterComponent,
            filterValue: filterValue,
        };
    }
    renderInvalidFilter() {
        return (React.createElement("div", null,
            "Error: type ",
            this.props.field.type,
            " has no filter UI."));
    }
    render() {
        let FilterComponent = this.state.filterComponent;
        return (React.createElement("form", { onSubmit: this.handleFormSubmit },
            React.createElement(Popout.Body, { ref: "body", scrollable: true, style: { height: this.state.bodyHeight } }, FilterComponent ? React.createElement(FilterComponent, { field: this.props.field, filter: this.state.filterValue, onChange: this.updateValue, onHeightChange: this.updateHeight }) : this.renderInvalidFilter()),
            React.createElement(Popout.Footer, { ref: "footer", primaryButtonIsSubmit: true, primaryButtonLabel: "Apply", secondaryButtonAction: this.props.onCancel, secondaryButtonLabel: "Cancel" })));
    }
}
