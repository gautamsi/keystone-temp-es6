/**
 * Render a popout list heading
 */
import * as React from 'react';
import * as blacklist from 'blacklist';
import * as classnames from 'classnames';
export class PopoutListHeading extends React.Component {
    render() {
        const className = classnames('PopoutList__heading', this.props.className);
        const props = blacklist(this.props, 'className');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
PopoutListHeading.displayName = 'PopoutListHeading';
