"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getRelatedIconClass_1 = require("../utils/getRelatedIconClass");
class Section extends React.Component {
    render() {
        const iconClass = this.props.icon || getRelatedIconClass_1.getRelatedIconClass(this.props.id);
        return (React.createElement("div", { className: "dashboard-group", "data-section-label": this.props.label },
            React.createElement("div", { className: "dashboard-group__heading" },
                React.createElement("span", { className: `dashboard-group__heading-icon ${iconClass}` }),
                this.props.label),
            this.props.children));
    }
}
exports.Section = Section;
