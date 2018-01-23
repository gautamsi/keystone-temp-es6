"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const enzyme_1 = require("enzyme");
const Section_1 = require("../Section");
describe('<Section />', () => {
    it('should render its label', () => {
        const label = 'Some Section Label';
        const component = enzyme_1.shallow(React.createElement(Section_1.Section, { label: label }));
        demand(component.contains(label)).true();
    });
    it('should have a data-section-label for e2e testing', () => {
        const label = 'Some Section Label';
        const component = enzyme_1.shallow(React.createElement(Section_1.Section, { label: label }));
        demand(component.find('.dashboard-group').at(0).prop('data-section-label')).eql(label);
    });
    it('should allow an icon classname to be passed in', () => {
        const iconClassname = 'octicon-someicon';
        const component = enzyme_1.shallow(React.createElement(Section_1.Section, { icon: iconClassname }));
        demand(component.find(`.${iconClassname}`).length).eql(1);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(Section_1.Section, null, children));
        demand(component.contains(children)).true();
    });
});
