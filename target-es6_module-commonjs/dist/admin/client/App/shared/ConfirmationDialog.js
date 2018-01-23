"use strict";
/**
 * Renders a confirmation dialog modal
 */
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
const elemental_1 = require("../elemental");
exports.ConfirmationDialog = (_a) => {
    var { cancelLabel, children, confirmationLabel, confirmationType, html, isOpen, onCancel, onConfirmation } = _a, props = __rest(_a, ["cancelLabel", "children", "confirmationLabel", "confirmationType", "html", "isOpen", "onCancel", "onConfirmation"]);
    // Property Violation
    if (children && html) {
        console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
    }
    return (React.createElement(elemental_1.ModalDialog, { backdropClosesModal: true, isOpen: isOpen, onClose: onCancel, width: 400 },
        html ? (React.createElement(elemental_1.ModalBody, Object.assign({}, props, { dangerouslySetInnerHTML: { __html: html } }))) : (React.createElement(elemental_1.ModalBody, Object.assign({}, props), children)),
        React.createElement(elemental_1.ModalFooter, null,
            React.createElement(elemental_1.Button, { autoFocus: true, size: "small", "data-button-type": "confirm", color: confirmationType, onClick: onConfirmation }, confirmationLabel),
            React.createElement(elemental_1.Button, { size: "small", "data-button-type": "cancel", variant: "link", color: "cancel", onClick: onCancel }, cancelLabel))));
};
exports.ConfirmationDialog.defaultProps = {
    cancelLabel: 'Cancel',
    confirmationLabel: 'Okay',
    confirmationType: 'danger',
    isOpen: false,
};
