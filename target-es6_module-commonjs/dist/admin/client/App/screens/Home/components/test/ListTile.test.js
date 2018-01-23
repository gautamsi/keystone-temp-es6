"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const ListTile_1 = require("../ListTile");
const enzyme_1 = require("enzyme");
const react_router_1 = require("react-router");
describe('<ListTile />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, null));
        demand(component.find('div').length).gt(0);
    });
    it('should attach the data-list-path for e2e testing', () => {
        const path = 'some/path';
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { path: path }));
        demand(component.find('div').at(0).prop('data-list-path')).eql(path);
    });
    it('should have a link to props.href', () => {
        const href = 'someurl.com';
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { href: href }));
        demand(component.find(react_router_1.Link).at(0).prop('to')).eql(href);
    });
    it('should render its label', () => {
        const label = 'Some List';
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { label: label }));
        demand(component.contains(label)).true();
    });
    it('should render a spinner if no counts are available', () => {
        const spinner = 'Some Spinner Component';
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { spinner: spinner }));
        demand(component.contains(spinner)).true();
    });
    it('should render the count when they are available', () => {
        const count = 100;
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { count: count }));
        demand(component.contains(count)).true();
    });
    it('should render a create button', () => {
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, null));
        demand(component.find(react_router_1.Link).at(1).prop('to')).include('?create');
    });
    it('should not render a create button if instructed', () => {
        const component = enzyme_1.shallow(React.createElement(ListTile_1.ListTile, { hideCreateButton: true }));
        demand(component.find(react_router_1.Link).at(1).prop('to')).not.include('?create');
    });
});
