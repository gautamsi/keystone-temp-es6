/**
 * Render a popout list. Can also use PopoutListItem and PopoutListHeading
 */
import * as React from 'react';
import * as blacklist from 'blacklist';
import * as classnames from 'classnames';
export class PopoutList extends React.Component {
    render() {
        const className = classnames('PopoutList', this.props.className);
        const props = blacklist(this.props, 'className');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
PopoutList.displayName = 'PopoutList';
// expose the child to the top level export
import { PopoutListItem } from './PopoutListItem';
import { PopoutListHeading } from './PopoutListHeading';
(function (PopoutList) {
    PopoutList.Item = PopoutListItem;
    PopoutList.Heading = PopoutListHeading;
})(PopoutList || (PopoutList = {}));
