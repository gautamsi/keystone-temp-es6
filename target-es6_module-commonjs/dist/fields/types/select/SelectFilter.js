"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const vkey = require("vkey");
const elemental_1 = require("../../../admin/client/App/elemental");
const PopoutList_1 = require("../../../admin/client/App/shared/Popout/PopoutList");
const Kbd_1 = require("../../../admin/client/App/shared/Kbd");
const bindFunctions_1 = require("../../utils/bindFunctions");
const INVERTED_OPTIONS = [
    { label: 'Matches', value: false },
    { label: 'Does NOT Match', value: true },
];
class FilterOption extends React.Component {
    constructor(props) {
        super(props);
        bindFunctions_1.bindFunctions.call(this, [
            'handleClick',
        ]);
    }
    handleClick() {
        const { option, selected } = this.props;
        this.props.onClick(option, selected);
    }
    render() {
        const { option, selected } = this.props;
        return (React.createElement(PopoutList_1.PopoutList.Item, { icon: selected ? 'check' : 'dash', isSelected: selected, label: option.label, onClick: this.handleClick }));
    }
}
class SelectFilter extends React.Component {
    constructor(props) {
        super(props);
        bindFunctions_1.bindFunctions.call(this, [
            'detectOS',
            'handleClick',
            'handleKeyDown',
            'handleKeyUp',
            'removeOption',
            'selectOption',
            'toggleAllOptions',
            'toggleInverted',
            'updateFilter',
        ]);
        this.state = { metaDown: false };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentDidMount() {
        this.detectOS();
        document.body.addEventListener('keydown', this.handleKeyDown, false);
        document.body.addEventListener('keyup', this.handleKeyUp, false);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
        document.body.removeEventListener('keyup', this.handleKeyUp);
    }
    // ==============================
    // METHODS
    // ==============================
    // TODO this should probably be moved to the main App component and stored
    // in context for other components to subscribe to when required
    detectOS() {
        let osName = 'Unknown OS';
        if (navigator.appVersion.includes('Win'))
            osName = 'Windows';
        if (navigator.appVersion.includes('Mac'))
            osName = 'MacOS';
        if (navigator.appVersion.includes('X11'))
            osName = 'UNIX';
        if (navigator.appVersion.includes('Linux'))
            osName = 'Linux';
        this.setState({ osName });
    }
    handleKeyDown(e) {
        if (vkey[e.keyCode] !== '<meta>')
            return;
        this.setState({ metaDown: true });
    }
    handleKeyUp(e) {
        if (vkey[e.keyCode] !== '<meta>')
            return;
        this.setState({ metaDown: false });
    }
    toggleInverted(inverted) {
        this.updateFilter({ inverted });
    }
    toggleAllOptions() {
        const { field, filter } = this.props;
        if (filter.value.length < field.ops.length) {
            this.updateFilter({ value: field.ops.map(i => i.value) });
        }
        else {
            this.updateFilter({ value: [] });
        }
    }
    selectOption(option) {
        const value = this.state.metaDown
            ? this.props.filter.value.concat(option.value)
            : [option.value];
        this.updateFilter({ value });
    }
    removeOption(option) {
        const value = this.state.metaDown
            ? this.props.filter.value.filter(i => i !== option.value)
            : [option.value];
        this.updateFilter({ value });
    }
    handleClick(option, selected) {
        selected ? this.removeOption(option) : this.selectOption(option);
    }
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    // ==============================
    // RENDERERS
    // ==============================
    renderOptions() {
        return this.props.field.ops.map((option, i) => {
            const selected = this.props.filter.value.indexOf(option.value) > -1;
            return (React.createElement(FilterOption, { key: `item-${i}-${option.value}`, option: option, selected: selected, onClick: this.handleClick }));
        });
    }
    render() {
        const { field, filter } = this.props;
        const indeterminate = filter.value.length < field.ops.length;
        const metaKeyLabel = this.state.osName === 'MacOS'
            ? 'cmd'
            : 'ctrl';
        const fieldStyles = {
            alignItems: 'center',
            borderBottom: '1px dashed rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
            paddingBottom: '1em',
        };
        return (React.createElement("div", null,
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.SegmentedControl, { equalWidthSegments: true, onChange: this.toggleInverted, options: INVERTED_OPTIONS, value: filter.inverted })),
            React.createElement("div", { style: fieldStyles },
                React.createElement(elemental_1.Button, { size: "xsmall", onClick: this.toggleAllOptions, style: { padding: 0, width: 50 } }, indeterminate ? 'All' : 'None'),
                React.createElement(elemental_1.FormNote, { style: { margin: 0 } },
                    "Hold ",
                    React.createElement(Kbd_1.Kbd, null, metaKeyLabel),
                    " to select multiple options")),
            this.renderOptions()));
    }
    static getDefaultValue() {
        return {
            inverted: INVERTED_OPTIONS[0].value,
            value: [],
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue()
        };
    }
}
exports.SelectFilter = SelectFilter;
