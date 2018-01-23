"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const evalDependsOn_1 = require("../../../../../../fields/utils/evalDependsOn");
class FormHeading extends React.Component {
    render() {
        if (!evalDependsOn_1.evalDependsOn(this.props.options.dependsOn, this.props.options.values)) {
            return null;
        }
        return React.createElement("h3", { className: "form-heading" }, this.props.content);
    }
}
FormHeading.displayName = 'FormHeading';
exports.FormHeading = FormHeading;
