/**
 * Renders an "Invalid Field Type" error
 */
import * as React from 'react';
export const InvalidFieldType = (props) => {
    return (React.createElement("div", { className: "alert alert-danger" },
        "Invalid field type ",
        React.createElement("strong", null, props.type),
        " at path ",
        React.createElement("strong", null, props.path)));
};
