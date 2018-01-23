"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const _1 = require("../");
describe('<Toolbar />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Toolbar, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of Toolbar', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Toolbar, null));
        demand(component.find('div').prop('className')).eql('Toolbar');
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(_1.Toolbar, null, children));
        demand(component.contains(children)).true();
    });
});
