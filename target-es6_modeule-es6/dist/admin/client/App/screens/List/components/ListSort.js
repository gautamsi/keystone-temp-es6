import { FormNote, FormField, FormInput } from '../../../elemental';
import * as React from 'react';
import * as vkey from 'vkey';
import { Kbd } from '../../../shared/Kbd';
import { Popout } from '../../../shared/Popout';
import { PopoutList } from '../../../shared/Popout/PopoutList';
export class ListSort extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortSelect = (path, inverted) => {
            if (this.state.altDown)
                inverted = true;
            this.props.handleSortSelect(path, inverted);
            this.closePopout();
        };
        this.openPopout = () => {
            this.setState({
                popoutIsOpen: true,
            });
        };
        this.closePopout = () => {
            this.setState({
                popoutIsOpen: false,
                searchString: '',
            });
        };
        this.updateSearch = (e) => {
            this.setState({ searchString: e.target.value });
        };
        this.state = {
            altDown: false,
            popoutIsOpen: false,
            searchString: '',
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown, false);
        document.body.addEventListener('keyup', this.handleKeyUp, false);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
        document.body.removeEventListener('keyup', this.handleKeyUp);
    }
    handleKeyDown(e) {
        if (vkey[e.keyCode] !== '<alt>')
            return;
        this.setState({
            altDown: true,
        });
    }
    handleKeyUp(e) {
        if (vkey[e.keyCode] !== '<alt>')
            return;
        this.setState({
            altDown: false,
        });
    }
    renderSortOptions() {
        // TODO: Handle multiple sort paths
        const activeSortPath = this.props.activeSort.paths[0];
        const availibleColumns = this.props.availableColumns;
        const { searchString } = this.state;
        let filteredColumns = availibleColumns;
        if (searchString) {
            filteredColumns = filteredColumns
                .filter(column => column.type !== 'heading')
                .filter(column => new RegExp(searchString).test(column.field.label.toLowerCase()));
        }
        return filteredColumns.map((el, i) => {
            if (el.type === 'heading') {
                return React.createElement(PopoutList.Heading, { key: 'heading_' + i }, el.content);
            }
            const path = el.field.path;
            const isSelected = activeSortPath && activeSortPath.path === path;
            const isInverted = isSelected && activeSortPath.invert;
            const icon = this.state.altDown || (isSelected && !isInverted) ? 'chevron-up' : 'chevron-down';
            return (React.createElement(PopoutList.Item, { key: 'column_' + el.field.path, icon: icon, isSelected: isSelected, label: el.field.label, onClick: () => {
                    this.handleSortSelect(path, isSelected && !isInverted);
                } }));
        });
    }
    render() {
        // TODO: Handle multiple sort paths
        const activeSortPath = this.props.activeSort.paths[0];
        const formFieldStyles = { borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: '1em' };
        return (React.createElement("span", null,
            activeSortPath && (React.createElement("span", null,
                React.createElement("span", { style: { color: '#999' } }, " sorted by "),
                React.createElement("a", { id: "listHeaderSortButton", href: "javascript:;", onClick: this.openPopout },
                    activeSortPath.label.toLowerCase(),
                    activeSortPath.invert ? ' (descending)' : '',
                    React.createElement("span", { className: "disclosure-arrow" })))),
            React.createElement(Popout, { isOpen: this.state.popoutIsOpen, onCancel: this.closePopout, relativeToID: "listHeaderSortButton" },
                React.createElement(Popout.Header, { title: "Sort" }),
                React.createElement(Popout.Body, { scrollable: true },
                    React.createElement(FormField, { style: formFieldStyles },
                        React.createElement(FormInput, { autoFocus: true, value: this.state.searchString, onChange: this.updateSearch, placeholder: "Find a field..." })),
                    React.createElement(PopoutList, null, this.renderSortOptions())),
                React.createElement(Popout.Footer, null,
                    React.createElement(FormNote, null,
                        "Hold ",
                        React.createElement(Kbd, null, "alt"),
                        " to toggle ascending/descending")))));
    }
}
ListSort.displayName = 'ListSort';
