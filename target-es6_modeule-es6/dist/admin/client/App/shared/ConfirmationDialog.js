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
import * as React from 'react';
import { Button, ModalDialog, ModalBody, ModalFooter } from '../elemental';
export const ConfirmationDialog = (_a) => {
    var { cancelLabel, children, confirmationLabel, confirmationType, html, isOpen, onCancel, onConfirmation } = _a, props = __rest(_a, ["cancelLabel", "children", "confirmationLabel", "confirmationType", "html", "isOpen", "onCancel", "onConfirmation"]);
    // Property Violation
    if (children && html) {
        console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
    }
    return (React.createElement(ModalDialog, { backdropClosesModal: true, isOpen: isOpen, onClose: onCancel, width: 400 },
        html ? (React.createElement(ModalBody, Object.assign({}, props, { dangerouslySetInnerHTML: { __html: html } }))) : (React.createElement(ModalBody, Object.assign({}, props), children)),
        React.createElement(ModalFooter, null,
            React.createElement(Button, { autoFocus: true, size: "small", "data-button-type": "confirm", color: confirmationType, onClick: onConfirmation }, confirmationLabel),
            React.createElement(Button, { size: "small", "data-button-type": "cancel", variant: "link", color: "cancel", onClick: onCancel }, cancelLabel))));
};
ConfirmationDialog.defaultProps = {
    cancelLabel: 'Cancel',
    confirmationLabel: 'Okay',
    confirmationType: 'danger',
    isOpen: false,
};
