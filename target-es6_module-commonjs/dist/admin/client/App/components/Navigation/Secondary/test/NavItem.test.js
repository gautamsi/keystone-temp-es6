"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const NavItem_1 = require("../NavItem");
const react_router_1 = require("react-router");
describe('<SecondaryNavItem />', () => {
    it('should render a list item', () => {
        const component = enzyme_1.shallow(React.createElement(NavItem_1.SecondaryNavItem, null));
        demand(component.find('li').length).eql(1);
    });
    it('should render a data-list-path for the e2e tests', () => {
        const path = 'some path';
        const component = enzyme_1.shallow(React.createElement(NavItem_1.SecondaryNavItem, { path: path }));
        demand(component.find('li').at(0).prop('data-list-path')).eql(path);
    });
    it('should render a react-router Link', () => {
        const component = enzyme_1.shallow(React.createElement(NavItem_1.SecondaryNavItem, { href: "/something" }));
        demand(component.find(react_router_1.Link).length).eql(1);
    });
    it('should render its children inside the Link', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(NavItem_1.SecondaryNavItem, { href: "something" }, children));
        demand(component.find(react_router_1.Link).at(0).contains(children)).true();
    });
});
