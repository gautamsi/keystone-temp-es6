"use strict";
/**
 * Render the body of a popout
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const blacklist = require("blacklist");
const classnames = require("classnames");
class PopoutBody extends React.Component {
    render() {
        const className = classnames('Popout__body', {
            'Popout__scrollable-area': this.props.scrollable,
        }, this.props.className);
        const props = blacklist(this.props, 'className', 'scrollable');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
exports.PopoutBody = PopoutBody;
