import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Toolbar, ToolbarSection } from './Toolbar';
import { EditFormHeaderSearch } from './EditFormHeaderSearch';
import { Link } from 'react-router-dom';
import { Drilldown } from './Drilldown';
import { GlyphButton, ResponsiveText } from '../../../elemental';
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
                findDOMNode(this.refs.searchField).blur();
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
        return (React.createElement(ToolbarSection, { left: true },
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
            return (React.createElement(GlyphButton, { component: Link, "data-e2e-editform-header-back": true, glyph: "chevron-left", position: "left", style: backStyles, to: backPath, variant: "link" }, list.plural));
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
        return (React.createElement(Drilldown, { items: drilldown }));
    }
    renderSearch() {
        let list = this.props.list;
        return (React.createElement("form", { action: `${Keystone.adminPath}/${list.path}`, className: "EditForm__header__search" },
            React.createElement(EditFormHeaderSearch, { value: this.state.searchString, onChange: this.searchStringChanged, onKeyUp: this.handleEscapeKey })));
    }
    renderInfo() {
        return (React.createElement(ToolbarSection, { right: true }, this.renderCreateButton()));
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
        return (React.createElement(GlyphButton, Object.assign({ "data-e2e-item-create-button": "true", color: "success", glyph: "plus", position: "left" }, props),
            React.createElement(ResponsiveText, { hiddenXS: `New ${singular}`, visibleXS: "Create" })));
    }
    render() {
        return (React.createElement(Toolbar, null,
            this.renderDrilldown(),
            this.renderInfo()));
    }
}
EditFormHeaderClass.displayName = 'EditFormHeader';
export const EditFormHeader = connect((state) => ({
    listActivePage: state.lists.page.index,
}))(EditFormHeaderClass);
