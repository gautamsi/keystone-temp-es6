"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const ToolbarSection_1 = require("../ToolbarSection");
describe('<ToolbarSection />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(ToolbarSection_1.ToolbarSection, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of Toolbar__section', () => {
        const component = enzyme_1.shallow(React.createElement(ToolbarSection_1.ToolbarSection, null));
        demand(component.find('div').prop('className')).eql('Toolbar__section');
    });
    it('should have a class of Toolbar__section--left if left is true', () => {
        const component = enzyme_1.shallow(React.createElement(ToolbarSection_1.ToolbarSection, { left: true }));
        demand(component.find('div').prop('className')).include('Toolbar__section--left');
    });
    it('should have a class of Toolbar__section--right if right is true', () => {
        const component = enzyme_1.shallow(React.createElement(ToolbarSection_1.ToolbarSection, { right: true }));
        demand(component.find('div').prop('className')).include('Toolbar__section--right');
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(ToolbarSection_1.ToolbarSection, null, children));
        demand(component.contains(children)).true();
    });
});
