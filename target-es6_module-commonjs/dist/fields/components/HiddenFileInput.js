"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/*
    Expose internal ref to parent
    =============================

    Field.create({
        triggerFileBrowser () {
            this.refs.fileInput.clickDomNode();
        },
        render () {
            <HiddenFileInput ref="fileInput" />
        }
    });
*/
class HiddenFileInput extends React.Component {
    constructor(props) {
        super(props);
        this.clearValue = this.clearValue.bind(this);
        this.clickDomNode = this.clickDomNode.bind(this);
        this.hasValue = this.hasValue.bind(this);
    }
    clearValue() {
        this.target.value = '';
    }
    clickDomNode() {
        this.target.click();
    }
    hasValue() {
        return !!this.target.value;
    }
    render() {
        const _a = this.props, { style } = _a, props = __rest(_a, ["style"]);
        const setRef = (n) => (this.target = n);
        const styles = Object.assign({ left: -9999, position: 'absolute' }, style);
        return (React.createElement("input", Object.assign({}, props, { style: styles, ref: setRef, tabIndex: "-1", type: "file" })));
    }
}
exports.HiddenFileInput = HiddenFileInput;
