"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const CodeMirror = require("codemirror");
const FieldBase_1 = require("../FieldBase");
const React = require("react");
const react_dom_1 = require("react-dom");
const elemental_1 = require("../../../admin/client/App/elemental");
const classnames = require("classnames");
/**
 * TODO:
 * - Remove dependency on lodash
 */
// See CodeMirror docs for API:
// http://codemirror.net/doc/manual.html
class CodeField extends FieldBase_1.FieldBase {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
        };
    }
    componentDidMount() {
        if (!this.refs.codemirror) {
            return;
        }
        let options = _.defaults({}, this.props.editor, {
            lineNumbers: true,
            readOnly: this.shouldRenderField() ? false : true,
        });
        this.codeMirror = CodeMirror.fromTextArea(react_dom_1.findDOMNode(this.refs.codemirror), options);
        this.codeMirror.setSize(null, this.props.height);
        this.codeMirror.on('change', this.codemirrorValueChanged.bind(this));
        this.codeMirror.on('focus', this.focusChanged.bind(this, true));
        this.codeMirror.on('blur', this.focusChanged.bind(this, false));
        this._currentCodemirrorValue = this.props.value;
    }
    componentWillUnmount() {
        // todo: is there a lighter-weight way to remove the cm instance?
        if (this.codeMirror) {
            this.codeMirror.toTextArea();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.codeMirror && this._currentCodemirrorValue !== nextProps.value) {
            this.codeMirror.setValue(nextProps.value);
        }
    }
    focus() {
        if (this.codeMirror) {
            this.codeMirror.focus();
        }
    }
    focusChanged(focused) {
        this.setState({
            isFocused: focused,
        });
    }
    codemirrorValueChanged(doc, change) {
        let newValue = doc.getValue();
        this._currentCodemirrorValue = newValue;
        this.props.onChange({
            path: this.props.path,
            value: newValue,
        });
    }
    renderCodemirror() {
        const className = classnames('CodeMirror-container', {
            'is-focused': this.state.isFocused && this.shouldRenderField(),
        });
        return (React.createElement("div", { className: className },
            React.createElement(elemental_1.FormInput, { autoComplete: "off", multiline: true, name: this.getInputName(this.props.path), onChange: this.valueChanged, ref: "codemirror", value: this.props.value })));
    }
    renderValue() {
        return this.renderCodemirror();
    }
    renderField() {
        return this.renderCodemirror();
    }
}
CodeField.displayName = 'CodeField';
CodeField.type = 'Code';
exports.CodeField = CodeField;
