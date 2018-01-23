"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const FormHeading_1 = require("../FormHeading");
const enzyme_1 = require("enzyme");
// Does not test evalDependsOn since that's already tested
describe('<FormHeading />', () => {
    it('should render an h3', () => {
        const component = enzyme_1.shallow(React.createElement(FormHeading_1.FormHeading, { options: {} }));
        demand(component.find('h3').length).eql(1);
    });
    it('should render its content', () => {
        const content = 'Hello World!';
        const component = enzyme_1.shallow(React.createElement(FormHeading_1.FormHeading, { options: {}, content: content }));
        demand(component.contains(content)).true();
    });
});
