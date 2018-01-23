"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Popout_1 = require("../../../shared/Popout");
const PopoutList_1 = require("../../../shared/Popout/PopoutList");
const elemental_1 = require("../../../elemental");
const ListHeaderButton_1 = require("./ListHeaderButton");
const actions_1 = require("../actions");
class ListColumnsForm extends React.Component {
    constructor(props) {
        super(props);
        this.togglePopout = (visible) => {
            this.setState({
                selectedColumns: this.getSelectedColumnsFromStore(),
                isOpen: visible,
                searchString: '',
            });
        };
        this.toggleColumn = (path, value) => {
            const newColumns = Object.assign({}, this.state.selectedColumns);
            if (value) {
                newColumns[path] = value;
            }
            else {
                delete newColumns[path];
            }
            this.setState({
                selectedColumns: newColumns,
            });
        };
        this.applyColumns = () => {
            this.props.dispatch(actions_1.setActiveColumns(Object.keys(this.state.selectedColumns)));
            this.togglePopout(false);
        };
        this.updateSearch = (e) => {
            this.setState({ searchString: e.target.value });
        };
        this.state = {
            selectedColumns: {},
            searchString: '',
        };
    }
    getSelectedColumnsFromStore() {
        let selectedColumns = {};
        this.props.activeColumns.forEach(col => {
            selectedColumns[col.path] = true;
        });
        return selectedColumns;
    }
    renderColumns() {
        const availableColumns = this.props.availableColumns;
        const { searchString } = this.state;
        let filteredColumns = availableColumns;
        if (searchString) {
            filteredColumns = filteredColumns
                .filter(column => column.type !== 'heading')
                .filter(column => new RegExp(searchString).test(column.field.label.toLowerCase()));
        }
        return filteredColumns.map((el, i) => {
            if (el.type === 'heading') {
                return React.createElement(PopoutList_1.PopoutList.Heading, { key: 'heading_' + i }, el.content);
            }
            const path = el.field.path;
            const selected = this.state.selectedColumns[path];
            return (React.createElement(PopoutList_1.PopoutList.Item, { key: 'column_' + el.field.path, icon: selected ? 'check' : 'dash', iconHover: selected ? 'dash' : 'check', isSelected: !!selected, label: el.field.label, onClick: () => { this.toggleColumn(path, !selected); } }));
        });
    }
    render() {
        const formFieldStyles = {
            borderBottom: '1px dashed rgba(0,0,0,0.1)',
            marginBottom: '1em',
            paddingBottom: '1em',
        };
        return (React.createElement("div", null,
            React.createElement(ListHeaderButton_1.ListHeaderButton, { active: `${this.state.isOpen}`, id: "listHeaderColumnButton", glyph: "list-unordered", label: "Columns", onClick: () => this.togglePopout(!this.state.isOpen) }),
            React.createElement(Popout_1.Popout, { isOpen: this.state.isOpen, onCancel: () => this.togglePopout(false), relativeToID: "listHeaderColumnButton" },
                React.createElement(Popout_1.Popout.Header, { title: "Columns" }),
                React.createElement(Popout_1.Popout.Body, { scrollable: true },
                    React.createElement("div", { style: formFieldStyles },
                        React.createElement(elemental_1.FormInput, { autoFocus: true, onChange: this.updateSearch, placeholder: "Find a column...", value: this.state.searchString })),
                    React.createElement(PopoutList_1.PopoutList, null, this.renderColumns())),
                React.createElement(Popout_1.Popout.Footer, { primaryButtonAction: this.applyColumns, primaryButtonLabel: "Apply", secondaryButtonAction: () => this.togglePopout(false), secondaryButtonLabel: "Cancel" }))));
    }
}
ListColumnsForm.displayName = 'ListColumnsForm';
exports.ListColumnsForm = ListColumnsForm;
