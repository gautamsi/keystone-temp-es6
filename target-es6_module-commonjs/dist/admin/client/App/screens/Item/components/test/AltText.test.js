"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const AltText_1 = require("../AltText");
const enzyme_1 = require("enzyme");
describe('<AltText />', () => {
    it('should render a span by default', () => {
        const component = enzyme_1.shallow(React.createElement(AltText_1.AltText, null));
        demand(component.find('span').length).gt(0);
    });
    it('should render a different component if passed in', () => {
        const passed = 'div';
        const component = enzyme_1.shallow(React.createElement(AltText_1.AltText, { component: passed }));
        demand(component.find(passed).length).gt(0);
    });
});
