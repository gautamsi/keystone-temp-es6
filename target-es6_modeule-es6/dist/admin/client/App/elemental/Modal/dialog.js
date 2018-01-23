import * as React from 'react';
import * as PropTypes from 'prop-types';
import { css } from 'glamor';
import { ScrollLock } from '../ScrollLock';
import { Portal } from '../Portal';
import { theme } from '../../../theme';
const canUseDom = !!(typeof window !== 'undefined'
    && window.document
    && window.document.createElement);
export class ModalDialog extends React.Component {
    constructor(props) {
        super(props);
        // ==============================
        // Methods
        // ==============================
        this.handleKeyboardInput = (event) => {
            if (event.keyCode === 27)
                this.props.onClose();
            return false;
        };
        this.handleBackdropClick = (e) => {
            if (e.target !== this.refs.container)
                return;
            this.props.onClose();
        };
        this.handleBackdropClick = this.handleBackdropClick.bind(this);
        this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    }
    static get defaultProps() {
        return {
            enableKeyboardInput: true,
            width: 768,
        };
    }
    getChildContext() {
        return {
            onClose: this.props.onClose,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (!canUseDom)
            return;
        // add event listeners
        if (nextProps.isOpen && nextProps.enableKeyboardInput) {
            window.addEventListener('keydown', this.handleKeyboardInput);
        }
        if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
            window.removeEventListener('keydown', this.handleKeyboardInput);
        }
    }
    componentWillUnmount() {
        if (this.props.enableKeyboardInput) {
            window.removeEventListener('keydown', this.handleKeyboardInput);
        }
    }
    // ==============================
    // Renderers
    // ==============================
    renderDialog() {
        const { backdropClosesModal, children, isOpen, width, } = this.props;
        if (!isOpen)
            return React.createElement("span", { key: "closed" });
        return (React.createElement("div", { className: `${css(classes.container)}`, key: "open", ref: "container", onClick: !!backdropClosesModal ? this.handleBackdropClick : undefined, onTouchEnd: !!backdropClosesModal ? this.handleBackdropClick : undefined },
            React.createElement("div", { className: `${css(classes.dialog)}`, style: { width }, "data-screen-id": "modal-dialog" }, children),
            React.createElement(ScrollLock, null)));
    }
    render() {
        return (React.createElement(Portal, null, this.renderDialog()));
    }
}
ModalDialog.childContextTypes = {
    onClose: PropTypes.func.isRequired,
};
const classes = {
    container: {
        alignItems: 'center',
        backgroundColor: theme.modal.background,
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme.modal.zIndex,
    },
    dialog: {
        backgroundColor: 'white',
        borderRadius: theme.borderRadius.default,
        paddingBottom: theme.modal.padding.dialog.vertical,
        paddingLeft: theme.modal.padding.dialog.horizontal,
        paddingRight: theme.modal.padding.dialog.horizontal,
        paddingTop: theme.modal.padding.dialog.vertical,
        position: 'relative',
    },
};
