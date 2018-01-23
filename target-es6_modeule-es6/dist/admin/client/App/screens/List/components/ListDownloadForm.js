import * as React from 'react';
import { Popout } from '../../../shared/Popout';
import { PopoutList } from '../../../shared/Popout/PopoutList';
import { ListHeaderButton } from './ListHeaderButton';
import { LabelledControl, Form, FormField, SegmentedControl } from '../../../elemental';
import { downloadItems } from '../actions';
const FORMAT_OPTIONS = [
    { label: 'CSV', value: 'csv' },
    { label: 'JSON', value: 'json' },
];
export class ListDownloadForm extends React.Component {
    constructor(props) {
        super(props);
        this.togglePopout = (visible) => {
            this.setState({
                isOpen: visible,
            });
        };
        this.toggleColumn = (column, value) => {
            const newColumns = Object.assign({}, this.state.selectedColumns);
            if (value) {
                newColumns[column] = value;
            }
            else {
                delete newColumns[column];
            }
            this.setState({
                selectedColumns: newColumns,
            });
        };
        this.changeFormat = (value) => {
            this.setState({
                format: value,
            });
        };
        this.toggleCurrentlySelectedColumns = (e) => {
            const newState = {
                useCurrentColumns: e.target.checked,
                selectedColumns: this.getDefaultSelectedColumns(),
            };
            this.setState(newState);
        };
        this.clickSelectAll = () => {
            if (this.allColumnsSelected()) {
                this.selectNoColumns();
            }
            else {
                this.selectAllColumns();
            }
        };
        this.handleDownloadRequest = () => {
            this.props.dispatch(downloadItems(this.state.format, Object.keys(this.state.selectedColumns)));
            this.togglePopout(false);
        };
        this.state = {
            format: FORMAT_OPTIONS[0].value,
            isOpen: false,
            useCurrentColumns: true,
            selectedColumns: this.getDefaultSelectedColumns(),
        };
    }
    getDefaultSelectedColumns() {
        let selectedColumns = {};
        this.props.activeColumns.forEach(col => {
            selectedColumns[col.path] = true;
        });
        return selectedColumns;
    }
    getListUIElements() {
        return this.props.list.uiElements.map((el) => {
            return el.type === 'field' ? {
                type: 'field',
                field: this.props.list.fields[el.field],
            } : el;
        });
    }
    allColumnsSelected() {
        const selectedColumns = Object.keys(this.state.selectedColumns).length;
        const columnAmount = this.getListUIElements().filter((el) => el.type !== 'heading').length;
        return selectedColumns === columnAmount;
    }
    selectAllColumns() {
        const newColumns = {};
        this.getListUIElements().map((el) => {
            if (el.type !== 'heading') {
                newColumns[el.field.path] = true;
            }
        });
        this.setState({
            selectedColumns: newColumns,
        });
    }
    selectNoColumns() {
        this.setState({
            selectedColumns: {},
        });
    }
    renderColumnSelect() {
        if (this.state.useCurrentColumns)
            return null;
        const possibleColumns = this.getListUIElements().map((el, i) => {
            if (el.type === 'heading') {
                return React.createElement(PopoutList.Heading, { key: 'heading_' + i }, el.content);
            }
            const columnKey = el.field.path;
            const columnValue = this.state.selectedColumns[columnKey];
            return (React.createElement(PopoutList.Item, { key: 'item_' + el.field.path, icon: columnValue ? 'check' : 'dash', iconHover: columnValue ? 'dash' : 'check', isSelected: columnValue, label: el.field.label, onClick: () => this.toggleColumn(columnKey, !columnValue) }));
        });
        const allColumnsSelected = this.allColumnsSelected();
        const checkboxLabel = allColumnsSelected ? 'Select None' : 'Select All';
        return (React.createElement("div", null,
            React.createElement(FormField, { offsetAbsentLabel: true },
                React.createElement(LabelledControl, { checked: allColumnsSelected, label: checkboxLabel, onChange: this.clickSelectAll, type: "checkbox", value: true })),
            React.createElement("div", { style: { borderTop: '1px dashed rgba(0,0,0,0.1)', marginTop: '1em', paddingTop: '1em' } }, possibleColumns)));
    }
    render() {
        const { useCurrentColumns } = this.state;
        return (React.createElement("div", null,
            React.createElement(ListHeaderButton, { active: `${this.state.isOpen}`, id: "listHeaderDownloadButton", glyph: "cloud-download", label: "Download", onClick: () => this.togglePopout(!this.state.isOpen) }),
            React.createElement(Popout, { isOpen: this.state.isOpen, onCancel: () => this.togglePopout(false), relativeToID: "listHeaderDownloadButton" },
                React.createElement(Popout.Header, { title: "Download" }),
                React.createElement(Popout.Body, { scrollable: true },
                    React.createElement(Form, { layout: "horizontal", labelWidth: 100, component: "div" },
                        React.createElement(FormField, { label: "File format:" },
                            React.createElement(SegmentedControl, { equalWidthSegments: true, onChange: this.changeFormat, options: FORMAT_OPTIONS, value: this.state.format })),
                        React.createElement(FormField, { label: "Columns:", style: { marginBottom: 0 } },
                            React.createElement(LabelledControl, { autoFocus: true, checked: useCurrentColumns, label: "Use currently selected", onChange: this.toggleCurrentlySelectedColumns, type: "checkbox", value: true })),
                        this.renderColumnSelect())),
                React.createElement(Popout.Footer, { primaryButtonAction: this.handleDownloadRequest, primaryButtonLabel: "Download", secondaryButtonAction: () => this.togglePopout(false), secondaryButtonLabel: "Cancel" }))));
    }
}
