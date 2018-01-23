"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames = require("classnames");
class ListControl extends React.Component {
    renderControl() {
        let icon = 'octicon octicon-';
        let className = classnames('ItemList__control ItemList__control--' + this.props.type, {
            'is-active': this.props.active,
        });
        let tabindex = this.props.type === 'sortable' ? -1 : null;
        if (this.props.type === 'check') {
            icon += 'check';
        }
        if (this.props.type === 'delete') {
            icon += 'trashcan';
        }
        if (this.props.type === 'sortable') {
            icon += 'three-bars';
        }
        let renderButton = (React.createElement("button", { type: "button", onClick: this.props.onClick, className: className, tabIndex: tabindex },
            React.createElement("span", { className: icon })));
        if (this.props.dragSource) {
            return this.props.dragSource(renderButton);
        }
        else {
            return renderButton;
        }
    }
    render() {
        let className = 'ItemList__col--control ItemList__col--' + this.props.type;
        return (React.createElement("td", { className: className }, this.renderControl()));
    }
}
exports.ListControl = ListControl;
