"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutHeader_1 = require("../PopoutHeader");
describe('<PopoutHeader />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutHeader_1.PopoutHeader, null));
        demand(component.find('div').length).eql(1);
    });
    it('should render a button on the left', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutHeader_1.PopoutHeader, { leftIcon: "globe", leftAction: function () { } }));
        demand(component.find('button').length).eql(1);
    });
    it('should render a title', () => {
        const title = 'Some title';
        const component = enzyme_1.shallow(React.createElement(PopoutHeader_1.PopoutHeader, { title: title }));
        demand(component.find('span').length).eql(1);
        demand(component.find('span').contains(title)).true();
    });
});
