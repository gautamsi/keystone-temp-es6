"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = require("classnames");
const evalDependsOn_1 = require("../utils/evalDependsOn");
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../admin/client/App/elemental");
const CollapsedFieldLabel_1 = require("../components/CollapsedFieldLabel");
function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
}
class FieldBase extends React.Component {
    constructor(props) {
        super(props);
        this.focusTargetRef = 'focusTarget';
        this.supports = {};
        this.getInputName = (path) => {
            // This correctly creates the path for field inputs, and supports the
            // inputNamePrefix prop that is required for nested fields to work
            return this.props.inputNamePrefix
                ? `${this.props.inputNamePrefix}[${path}]`
                : path;
        };
        this.valueChanged = (event) => {
            this.props.onChange({
                path: this.props.path,
                value: event.target.value,
            });
        };
        this.uncollapse = () => {
            this.setState({
                isCollapsed: false,
            });
        };
        this.state = {};
    }
    static getDefaultValue(field) {
        return field.defaultValue || '';
    }
    static get defaultProps() {
        return {
            adminPath: Keystone.adminPath,
            inputProps: {},
            labelProps: {},
            valueProps: {},
            size: 'full',
        };
    }
    shouldCollapse() {
        return this.props.collapse && !this.props.value;
    }
    shouldRenderField() {
        if (this.props.mode === 'create')
            return true;
        return !this.props.noedit;
    }
    focus() {
        if (!this.refs[this.focusTargetRef])
            return;
        react_dom_1.findDOMNode(this.refs[this.focusTargetRef]).focus();
    }
    renderNote() {
        if (!this.props.note)
            return null;
        return React.createElement(elemental_1.FormNote, { html: this.props.note });
    }
    renderField() {
        const { autoFocus, value, inputProps } = this.props;
        return (React.createElement(elemental_1.FormInput, Object.assign({}, Object.assign({}, inputProps, { autoFocus, autoComplete: 'off', name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: 'focusTarget', value }))));
    }
    renderValue() {
        return React.createElement(elemental_1.FormInput, { noedit: true }, this.props.value);
    }
    renderUI() {
        let wrapperClassName = classnames('field-type-' + this.props.type, this.props.className, { 'field-monospace': this.props.monospace });
        return (React.createElement(elemental_1.FormField, { htmlFor: this.props.path, label: this.props.label, className: wrapperClassName, cropLabel: true },
            React.createElement("div", { className: 'FormField__inner field-size-' + this.props.size }, this.shouldRenderField() ? this.renderField() : this.renderValue()),
            this.renderNote()));
    }
    componentWillMount() {
        this.setState({
            isCollapsed: this.shouldCollapse(),
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isCollapsed && !this.state.isCollapsed) {
            this.focus();
        }
    }
    renderCollapse() {
        if (!this.shouldRenderField())
            return null;
        return (React.createElement(elemental_1.FormField, null,
            React.createElement(CollapsedFieldLabel_1.CollapsedFieldLabel, { onClick: this.uncollapse },
                "+ Add ",
                this.props.label.toLowerCase())));
    }
    render() {
        if (!evalDependsOn_1.evalDependsOn(this.props.dependsOn, this.props.values)) {
            return null;
        }
        if (this.state.isCollapsed) {
            return this.renderCollapse();
        }
        return this.renderUI();
    }
}
exports.FieldBase = FieldBase;
