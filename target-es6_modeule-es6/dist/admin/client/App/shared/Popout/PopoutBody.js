/**
 * Render the body of a popout
 */
import * as React from 'react';
import * as blacklist from 'blacklist';
import * as classnames from 'classnames';
export class PopoutBody extends React.Component {
    render() {
        const className = classnames('Popout__body', {
            'Popout__scrollable-area': this.props.scrollable,
        }, this.props.className);
        const props = blacklist(this.props, 'className', 'scrollable');
        return (React.createElement("div", Object.assign({ className: className }, props)));
    }
}
