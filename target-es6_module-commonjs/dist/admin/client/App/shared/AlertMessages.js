"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../elemental");
const string_1 = require("../../utils/string");
class AlertMessages extends React.Component {
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
                return (React.createElement("li", { key: path }, string_1.upcase(errors[path].error || errors[path].message)));
            }
            else {
                return (React.createElement("div", { key: path }, string_1.upcase(errors[path].error || errors[path].message)));
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
        return React.createElement(elemental_1.Alert, { color: "danger" }, alertContent);
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
                        return React.createElement(elemental_1.Alert, { color: "danger" }, string_1.upcase(error.error));
                    }
                default:
                    return React.createElement(elemental_1.Alert, { color: "danger" }, string_1.upcase(error.error));
            }
        }
        if (success) {
            // Render success alerts
            return React.createElement(elemental_1.Alert, { color: "success" }, string_1.upcase(success.success));
        }
        return null; // No alerts, render nothing
    }
}
AlertMessages.displayName = 'AlertMessages';
exports.AlertMessages = AlertMessages;
