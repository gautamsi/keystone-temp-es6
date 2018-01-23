/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */
import * as React from 'react';
import { Alert } from '../../App/elemental';
export const AlertView = function (props) {
    if (props.isInvalid) {
        return React.createElement(Alert, { key: "error", color: "danger", style: { textAlign: 'center' } }, props.invalidMessage);
    }
    else if (props.signedOut) {
        return React.createElement(Alert, { key: "signed-out", color: "info", style: { textAlign: 'center' } }, "You have been signed out.");
    }
    else {
        // Can't return "null" from stateless components
        return React.createElement("span", null);
    }
};
