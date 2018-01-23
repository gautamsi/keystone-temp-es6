"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9
class PassContext extends React.Component {
    getChildContext() {
        return this.props.context;
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
PassContext.childContextTypes = {
    onClose: PropTypes.func,
};
exports.PassContext = PassContext;
