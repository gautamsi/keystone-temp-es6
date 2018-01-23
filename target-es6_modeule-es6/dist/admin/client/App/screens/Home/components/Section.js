import * as React from 'react';
import { getRelatedIconClass } from '../utils/getRelatedIconClass';
export class Section extends React.Component {
    render() {
        const iconClass = this.props.icon || getRelatedIconClass(this.props.id);
        return (React.createElement("div", { className: "dashboard-group", "data-section-label": this.props.label },
            React.createElement("div", { className: "dashboard-group__heading" },
                React.createElement("span", { className: `dashboard-group__heading-icon ${iconClass}` }),
                this.props.label),
            this.props.children));
    }
}
