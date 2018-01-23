"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const ListItem_1 = require("../ListItem");
const react_router_1 = require("react-router");
describe('<MobileListItem />', () => {
    it('should render a react-router Link', () => {
        const component = enzyme_1.shallow(React.createElement(ListItem_1.MobileListItem, null));
        demand(component.find(react_router_1.Link).length).eql(1);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(ListItem_1.MobileListItem, null, children));
        demand(component.contains(children)).true();
    });
    it('should link to the href prop', () => {
        const href = 'someurl.com';
        const component = enzyme_1.shallow(React.createElement(ListItem_1.MobileListItem, { href: href }));
        demand(component.find(react_router_1.Link).length).eql(1);
        demand(component.find(react_router_1.Link).at(0).prop('to')).eql(href);
    });
});
