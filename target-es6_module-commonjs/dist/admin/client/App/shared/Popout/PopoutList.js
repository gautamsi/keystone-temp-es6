"use strict";
/**
 * Render a popout list. Can also use PopoutListItem and PopoutListHeading
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const blacklist = require("blacklist");
const classnames = require("classnames");
class PopoutList extends React.Component {
    render() {
        const className = classnames('PopoutList', this.props.className);
        const props = blacklist(this.props, 'className');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
PopoutList.displayName = 'PopoutList';
exports.PopoutList = PopoutList;
// expose the child to the top level export
const PopoutListItem_1 = require("./PopoutListItem");
const PopoutListHeading_1 = require("./PopoutListHeading");
(function (PopoutList) {
    PopoutList.Item = PopoutListItem_1.PopoutListItem;
    PopoutList.Heading = PopoutListHeading_1.PopoutListHeading;
})(PopoutList = exports.PopoutList || (exports.PopoutList = {}));
