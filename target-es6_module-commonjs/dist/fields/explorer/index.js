"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const ReactDOM = require("react-dom");
const FieldType_1 = require("./components/FieldType");
const Types = {
    Boolean: require('../types/boolean/test/explorer'),
    Code: require('../types/code/test/explorer'),
    Color: require('../types/color/test/explorer'),
    CloudinaryImage: require('../types/cloudinaryimage/test/explorer'),
    CloudinaryImages: require('../types/cloudinaryimages/test/explorer'),
    Date: require('../types/date/test/explorer'),
    DateArray: require('../types/datearray/test/explorer'),
    Datetime: require('../types/datetime/test/explorer'),
    Email: require('../types/email/test/explorer'),
    Geopoint: require('../types/geopoint/test/explorer'),
    Html: require('../types/html/test/explorer'),
    Key: require('../types/key/test/explorer'),
    Location: require('../types/location/test/explorer'),
    Markdown: require('../types/markdown/test/explorer'),
    Money: require('../types/money/test/explorer'),
    Name: require('../types/name/test/explorer'),
    Number: require('../types/number/test/explorer'),
    NumberArray: require('../types/numberarray/test/explorer'),
    Password: require('../types/password/test/explorer'),
    Select: require('../types/select/test/explorer'),
    Relationship: require('../types/relationship/test/explorer'),
    Text: require('../types/text/test/explorer'),
    Textarea: require('../types/textarea/test/explorer'),
    TextArray: require('../types/textarray/test/explorer'),
    Url: require('../types/url/test/explorer'),
};
function generateNavSections(arr) {
    const navSections = {};
    arr.forEach((t) => {
        if (!navSections[t.section])
            navSections[t.section] = [];
    });
    arr.forEach(t => navSections[t.section].push(t.Field.type));
    return navSections;
}
const navSections = generateNavSections(Object.keys(Types).map(i => Types[i]));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = { sidebarIsOpen: true };
    }
    toggleSidebar() {
        this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
    }
    render() {
        const { children, params } = this.props;
        const { sidebarIsOpen } = this.state;
        return (React.createElement("div", { className: `fx-wrapper ${sidebarIsOpen ? 'fx-wrapper--sidebar-is-open' : ''}` },
            React.createElement("div", { className: "fx-sidebar" },
                React.createElement("div", { className: "fx-sidebar__header" },
                    params.type
                        ? React.createElement(react_router_1.Link, { to: "/", className: "fx-sidebar__header__link" }, "Field Types")
                        : 'Ready',
                    React.createElement("div", { className: "fx-sidebar__header__border" })),
                Object.keys(navSections).sort().map(section => {
                    let currentSection;
                    const types = navSections[section].map(type => {
                        if (Types[params.type]) {
                            currentSection = Types[params.type].section;
                        }
                        const itemClassName = params.type === type
                            ? 'fx-sidebar__item fx-sidebar__item--active'
                            : 'fx-sidebar__item';
                        return (React.createElement(react_router_1.Link, { key: type, to: `/${type}`, className: itemClassName }, type));
                    });
                    const sectionClassName = currentSection === section
                        ? 'fx-sidebar__section fx-sidebar__section--active'
                        : 'fx-sidebar__section';
                    return (React.createElement("div", { key: section, className: sectionClassName },
                        React.createElement("div", { key: section, className: "fx-sidebar__section__title" }, section),
                        types));
                })),
            React.createElement("div", { className: "fx-body" }, children.map(children, (child) => {
                if (!params.type)
                    return child;
                const Type = Types[params.type];
                return React.cloneElement(child, {
                    FieldComponent: Type.Field,
                    FilterComponent: Type.Filter,
                    filter: Type.Filter.getDefaultValue(),
                    readme: Type.readme,
                    section: Type.section,
                    spec: Type.spec,
                    toggleSidebar: this.toggleSidebar,
                    value: Type.spec.value,
                });
            }))));
    }
}
exports.App = App;
const Home = (props) => {
    return (React.createElement("div", { className: "fx-welcome" },
        React.createElement("div", { className: "fx-welcome__inner" },
            React.createElement("h1", { className: "fx-welcome__heading" }, "Welcome!"),
            React.createElement("div", { className: "fx-welcome__content" }, "Select a field on the left to begin exploring..."))));
};
ReactDOM.render(React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
    React.createElement(react_router_1.Route, { path: "/", component: App },
        React.createElement(react_router_1.IndexRoute, { component: Home }),
        React.createElement(react_router_1.Route, { path: ":type", component: FieldType_1.ExplorerFieldType }))), document.getElementById('explorer'));
