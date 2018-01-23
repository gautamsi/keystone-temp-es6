"use strict";
/**
 * A single flash message component. Used by FlashMessages.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../elemental");
class FlashMessage extends React.Component {
    // Render the message
    renderMessage(message) {
        // If the message is only a string, render the string
        if (typeof message === 'string') {
            return (React.createElement("span", null, message));
        }
        // Get the title and the detail of the message
        const title = message.title ? React.createElement("h4", null, message.title) : null;
        const detail = message.detail ? React.createElement("p", null, message.detail) : null;
        // If the message has a list attached, render a <ul>
        const list = message.list ? (React.createElement("ul", { style: { marginBottom: 0 } }, message.list.map((item, i) => React.createElement("li", { key: `i${i}` }, item)))) : null;
        return (React.createElement("span", null,
            title,
            detail,
            list));
    }
    render() {
        const { message, type } = this.props;
        return (React.createElement(elemental_1.Alert, { color: type }, this.renderMessage(message)));
    }
}
exports.FlashMessage = FlashMessage;
