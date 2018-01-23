/**
 * Render a header for a popout
 */
import * as React from 'react';
import Transition from 'react-transition-group/Transition';
export class PopoutHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'PopoutHeader';
    }
    render() {
        // If we have a left action and a left icon, render a header button
        let headerButton = (this.props.leftAction && this.props.leftIcon) ? (React.createElement("button", { key: 'button_' + this.props.transitionDirection, type: "button", className: 'Popout__header__button octicon octicon-' + this.props.leftIcon, onClick: this.props.leftAction })) : () => null;
        // If we have a title, render it
        let headerTitle = this.props.title ? (React.createElement("span", { key: 'title_' + this.props.transitionDirection, className: "Popout__header__label" }, this.props.title)) : () => null;
        return (React.createElement("div", { className: "Popout__header" },
            React.createElement(Transition, { classNames: "Popout__header__button", timeout: 200 }, headerButton),
            React.createElement(Transition, { classNames: 'Popout__pane-' + this.props.transitionDirection, timeout: 360 }, headerTitle)));
    }
}
