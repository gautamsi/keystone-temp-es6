/**
 * Render a footer for a popout
 */
import * as React from 'react';
const BUTTON_BASE_CLASSNAME = 'Popout__footer__button Popout__footer__button--';
export class PopoutFooter extends React.Component {
    // Render a primary button
    renderPrimaryButton() {
        if (!this.props.primaryButtonLabel)
            return null;
        return (React.createElement("button", { type: this.props.primaryButtonIsSubmit ? 'submit' : 'button', className: BUTTON_BASE_CLASSNAME + 'primary', onClick: this.props.primaryButtonAction }, this.props.primaryButtonLabel));
    }
    // Render a secondary button
    renderSecondaryButton() {
        if (!this.props.secondaryButtonAction || !this.props.secondaryButtonLabel)
            return null;
        return (React.createElement("button", { type: "button", className: BUTTON_BASE_CLASSNAME + 'secondary', onClick: this.props.secondaryButtonAction }, this.props.secondaryButtonLabel));
    }
    render() {
        return (React.createElement("div", { className: "Popout__footer" },
            this.renderPrimaryButton(),
            this.renderSecondaryButton(),
            this.props.children));
    }
}
PopoutFooter.displayName = 'PopoutFooter';
