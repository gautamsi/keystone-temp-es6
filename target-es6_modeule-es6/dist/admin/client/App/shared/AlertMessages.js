import * as React from 'react';
import { Alert } from '../elemental';
import { upcase } from '../../utils/string';
export class AlertMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: {},
        };
    }
    renderValidationErrors() {
        let errors = this.props.alerts.error.detail;
        if (errors.name === 'ValidationError') {
            errors = errors.errors;
        }
        let errorCount = Object.keys(errors).length;
        let alertContent;
        let messages = Object.keys(errors).map((path) => {
            if (errorCount > 1) {
                return (React.createElement("li", { key: path }, upcase(errors[path].error || errors[path].message)));
            }
            else {
                return (React.createElement("div", { key: path }, upcase(errors[path].error || errors[path].message)));
            }
        });
        if (errorCount > 1) {
            alertContent = (React.createElement("div", null,
                React.createElement("h4", null,
                    "There were ",
                    errorCount,
                    " errors creating the new item:"),
                React.createElement("ul", null, messages)));
        }
        else {
            alertContent = messages;
        }
        return React.createElement(Alert, { color: "danger" }, alertContent);
    }
    render() {
        let { error, success } = this.props.alerts;
        if (error) {
            // Render error alerts
            switch (error.error) {
                case 'validation errors':
                    return this.renderValidationErrors();
                case 'error':
                    if (error.detail.name === 'ValidationError') {
                        return this.renderValidationErrors();
                    }
                    else {
                        return React.createElement(Alert, { color: "danger" }, upcase(error.error));
                    }
                default:
                    return React.createElement(Alert, { color: "danger" }, upcase(error.error));
            }
        }
        if (success) {
            // Render success alerts
            return React.createElement(Alert, { color: "success" }, upcase(success.success));
        }
        return null; // No alerts, render nothing
    }
}
AlertMessages.displayName = 'AlertMessages';
