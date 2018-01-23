"use strict";
/**
 * Render a popout list heading
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const blacklist = require("blacklist");
const classnames = require("classnames");
class PopoutListHeading extends React.Component {
    render() {
        const className = classnames('PopoutList__heading', this.props.className);
        const props = blacklist(this.props, 'className');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
PopoutListHeading.displayName = 'PopoutListHeading';
exports.PopoutListHeading = PopoutListHeading;
