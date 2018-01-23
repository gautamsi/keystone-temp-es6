/**
 * Render a popout list item
 */
import * as React from 'react';
import * as blacklist from 'blacklist';
import * as classnames from 'classnames';
export class PopoutListItem extends React.Component {
    constructor(props) {
        super(props);
        this.hover = () => {
            this.setState({ hover: true });
        };
        this.unhover = () => {
            this.setState({ hover: false });
        };
        this.state = {
            hover: false,
        };
    }
    // Render an icon
    renderIcon() {
        if (!this.props.icon)
            return null;
        const icon = this.state.hover && this.props.iconHover ? this.props.iconHover : this.props.icon;
        const iconClassname = classnames('PopoutList__item__icon octicon', ('octicon-' + icon));
        return React.createElement("span", { className: iconClassname });
    }
    render() {
        const itemClassname = classnames('PopoutList__item', {
            'is-selected': this.props.isSelected,
        });
        const props = blacklist(this.props, 'className', 'icon', 'iconHover', 'isSelected', 'label');
        return (React.createElement("button", Object.assign({ type: "button", title: this.props.label, className: itemClassname, onFocus: this.hover, onBlur: this.unhover, onMouseOver: this.hover, onMouseOut: this.unhover }, props),
            this.renderIcon(),
            React.createElement("span", { className: "PopoutList__item__label" }, this.props.label)));
    }
}
PopoutListItem.displayName = 'PopoutListItem';
