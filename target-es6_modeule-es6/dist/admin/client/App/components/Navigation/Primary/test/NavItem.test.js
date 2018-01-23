"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const NavItem_1 = require("../NavItem");
const react_router_1 = require("react-router");
describe('<PrimaryNavItem />', () => {
    it('should render a list item', () => {
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, null));
        demand(component.find('li').length).eql(1);
    });
    it('should render a data-section-label for the e2e tests', () => {
        const label = 'some label';
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, { label: label }));
        demand(component.find('li').at(0).prop('data-section-label')).eql(label);
    });
    it('should render an anchor tab by default', () => {
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, null));
        demand(component.find('a').length).eql(1);
    });
    it('should render its children inside the anchor', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, null, children));
        demand(component.find('a').at(0).contains(children)).true();
    });
    it('should render a react-router link if the to prop is specified', () => {
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, { to: "/something" }));
        demand(component.find(react_router_1.Link).length).eql(1);
    });
    it('should render its children inside the Link', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(NavItem_1.PrimaryNavItem, { to: "something" }, children));
        demand(component.find(react_router_1.Link).at(0).contains(children)).true();
    });
});
