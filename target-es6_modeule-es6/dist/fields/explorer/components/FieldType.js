import * as React from 'react';
import * as Markdown from 'react-markdown';
import { ExplorerCol as Col } from './Col';
import { ExplorerRow as Row } from './Row';
import { ExplorerFieldType as FieldSpec } from './FieldSpec';
export class ExplorerFieldType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readmeIsVisible: !!this.props.readme,
            filter: this.props.FilterComponent.getDefaultValue(),
            value: this.props.value,
        };
    }
    componentWillReceiveProps(newProps) {
        if (this.props.params.type === newProps.params.type)
            return;
        this.setState({
            filter: newProps.FilterComponent.getDefaultValue(),
            readmeIsVisible: newProps.readme
                ? this.state.readmeIsVisible
                : false,
            value: newProps.value,
        });
    }
    onFieldChange(e) {
        let logValue = typeof e.value === 'string' ? `"${e.value}"` : e.value;
        console.log(`${this.props.params.type} field value changed:`, logValue);
        this.setState({
            value: e.value,
        });
    }
    onFilterChange(value) {
        console.log(`${this.props.params.type} filter value changed:`, value);
        this.setState({
            filter: value,
        });
    }
    toggleReadme() {
        this.setState({ readmeIsVisible: !this.state.readmeIsVisible });
    }
    render() {
        const { FieldComponent, FilterComponent, readme, toggleSidebar } = this.props;
        const { readmeIsVisible } = this.state;
        const specs = Array.isArray(this.props.spec) ? this.props.spec : [this.props.spec];
        return (React.createElement("div", { className: "fx-page" },
            React.createElement("div", { className: "fx-page__header" },
                React.createElement("div", { className: "fx-page__header__title" },
                    React.createElement("button", { className: "fx-page__header__button fx-page__header__button--sidebar mega-octicon octicon-three-bars", onClick: toggleSidebar, type: "button" }),
                    FieldComponent.type),
                !!readme && (React.createElement("button", { className: "fx-page__header__button fx-page__header__button--readme mega-octicon octicon-file-text", onClick: this.toggleReadme, title: readmeIsVisible ? 'Hide Readme' : 'Show Readme', type: "button" }))),
            React.createElement("div", { className: "fx-page__content" },
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement("div", { className: "fx-page__content__inner" }, specs.map((spec, i) => (React.createElement(FieldSpec, { key: spec.path, i: i, FieldComponent: FieldComponent, FilterComponent: FilterComponent, spec: spec, readmeIsVisible: readmeIsVisible }))))),
                    !!readmeIsVisible && (React.createElement(Col, { width: 380 },
                        React.createElement(Markdown, { className: "Markdown", source: readme })))))));
    }
}
