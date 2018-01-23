import * as React from 'react';
import { evalDependsOn } from '../../../../../../fields/utils/evalDependsOn';
export class FormHeading extends React.Component {
    render() {
        if (!evalDependsOn(this.props.options.dependsOn, this.props.options.values)) {
            return null;
        }
        return React.createElement("h3", { className: "form-heading" }, this.props.content);
    }
}
FormHeading.displayName = 'FormHeading';
