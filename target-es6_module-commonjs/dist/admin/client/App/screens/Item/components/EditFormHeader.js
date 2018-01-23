"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const Toolbar_1 = require("./Toolbar");
const EditFormHeaderSearch_1 = require("./EditFormHeaderSearch");
const react_router_dom_1 = require("react-router-dom");
const Drilldown_1 = require("./Drilldown");
const elemental_1 = require("../../../elemental");
class EditFormHeaderClass extends React.Component {
    constructor(props) {
        super(props);
        this.searchStringChanged = (event) => {
            this.setState({
                searchString: event.target.value,
            });
        };
        this.handleEscapeKey = (event) => {
            const escapeKeyCode = 27;
            if (event.which === escapeKeyCode) {
                react_dom_1.findDOMNode(this.refs.searchField).blur();
            }
        };
        this.state = {
            searchString: '',
        };
    }
    toggleCreate(visible) {
        this.props.toggleCreate(visible);
    }
    renderDrilldown() {
        return (React.createElement(Toolbar_1.ToolbarSection, { left: true },
            this.renderDrilldownItems(),
            this.renderSearch()));
    }
    renderDrilldownItems() {
        const { data, list } = this.props;
        const items = data.drilldown ? data.drilldown.items : [];
        let backPath = `${Keystone.adminPath}/${list.path}`;
        const backStyles = { paddingLeft: 0, paddingRight: 0 };
        // Link to the list page the user came from
        if (this.props.listActivePage && this.props.listActivePage > 1) {
            backPath = `${backPath}?page=${this.props.listActivePage}`;
        }
        // return a single back button when no drilldown exists
        if (!items.length) {
            return (React.createElement(elemental_1.GlyphButton, { component: react_router_dom_1.Link, "data-e2e-editform-header-back": true, glyph: "chevron-left", position: "left", style: backStyles, to: backPath, variant: "link" }, list.plural));
        }
        // prepare the drilldown elements
        const drilldown = [];
        items.forEach((item, idx) => {
            // FIXME @jedwatson
            // we used to support relationships of type MANY where items were
            // represented as siblings inside a single list item; this got a
            // bit messy...
            item.items.forEach(link => {
                drilldown.push({
                    href: link.href,
                    label: link.label,
                    title: item.list.singular,
                });
            });
        });
        // add the current list to the drilldown
        drilldown.push({
            href: backPath,
            label: list.plural,
        });
        return (React.createElement(Drilldown_1.Drilldown, { items: drilldown }));
    }
    renderSearch() {
        let list = this.props.list;
        return (React.createElement("form", { action: `${Keystone.adminPath}/${list.path}`, className: "EditForm__header__search" },
            React.createElement(EditFormHeaderSearch_1.EditFormHeaderSearch, { value: this.state.searchString, onChange: this.searchStringChanged, onKeyUp: this.handleEscapeKey })));
    }
    renderInfo() {
        return (React.createElement(Toolbar_1.ToolbarSection, { right: true }, this.renderCreateButton()));
    }
    renderCreateButton() {
        const { nocreate, autocreate, singular } = this.props.list;
        if (nocreate)
            return null;
        let props = {};
        if (autocreate) {
            props.href = '?new' + Keystone.csrf.query;
        }
        else {
            props.onClick = () => { this.toggleCreate(true); };
        }
        return (React.createElement(elemental_1.GlyphButton, Object.assign({ "data-e2e-item-create-button": "true", color: "success", glyph: "plus", position: "left" }, props),
            React.createElement(elemental_1.ResponsiveText, { hiddenXS: `New ${singular}`, visibleXS: "Create" })));
    }
    render() {
        return (React.createElement(Toolbar_1.Toolbar, null,
            this.renderDrilldown(),
            this.renderInfo()));
    }
}
EditFormHeaderClass.displayName = 'EditFormHeader';
exports.EditFormHeader = react_redux_1.connect((state) => ({
    listActivePage: state.lists.page.index,
}))(EditFormHeaderClass);
