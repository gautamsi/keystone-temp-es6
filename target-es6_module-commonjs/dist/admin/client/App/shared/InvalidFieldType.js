"use strict";
/**
 * Renders an "Invalid Field Type" error
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.InvalidFieldType = (props) => {
    return (React.createElement("div", { className: "alert alert-danger" },
        "Invalid field type ",
        React.createElement("strong", null, props.type),
        " at path ",
        React.createElement("strong", null, props.path)));
};
