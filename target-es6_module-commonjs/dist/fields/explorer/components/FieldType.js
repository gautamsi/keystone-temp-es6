"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Markdown = require("react-markdown");
const Col_1 = require("./Col");
const Row_1 = require("./Row");
const FieldSpec_1 = require("./FieldSpec");
class ExplorerFieldType extends React.Component {
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
                React.createElement(Row_1.ExplorerRow, null,
                    React.createElement(Col_1.ExplorerCol, null,
                        React.createElement("div", { className: "fx-page__content__inner" }, specs.map((spec, i) => (React.createElement(FieldSpec_1.ExplorerFieldType, { key: spec.path, i: i, FieldComponent: FieldComponent, FilterComponent: FilterComponent, spec: spec, readmeIsVisible: readmeIsVisible }))))),
                    !!readmeIsVisible && (React.createElement(Col_1.ExplorerCol, { width: 380 },
                        React.createElement(Markdown, { className: "Markdown", source: readme })))))));
    }
}
exports.ExplorerFieldType = ExplorerFieldType;
