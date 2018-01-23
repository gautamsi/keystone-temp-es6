"use strict";
/**
 * Render a popout pane, calls props.onLayout when the component mounts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const blacklist = require("blacklist");
const classnames = require("classnames");
class PopoutPane extends React.Component {
    static get defaultProps() {
        return {
            onLayout: () => { },
        };
    }
    componentDidMount() {
        this.props.onLayout(this.refs.el.offsetHeight);
    }
    render() {
        const className = classnames('Popout__pane', this.props.className);
        const props = blacklist(this.props, 'className', 'onLayout');
        return (React.createElement("div", Object.assign({ ref: "el", className: className }, props)));
    }
}
PopoutPane.displayName = 'PopoutPane';
exports.PopoutPane = PopoutPane;
