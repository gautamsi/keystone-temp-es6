"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutBody_1 = require("../PopoutBody");
describe('<PopoutBody />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutBody_1.PopoutBody, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of Popout__body', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutBody_1.PopoutBody, null));
        demand(component.find('div').at(0).prop('className')).eql('Popout__body');
    });
    it('should add a class name when scrollable', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutBody_1.PopoutBody, { scrollable: true }));
        demand(component.find('div').at(0).prop('className'))
            .eql('Popout__body Popout__scrollable-area');
    });
    it('should have a class of PopoutBody even when another class is passed', () => {
        const classname = 'something__else';
        const component = enzyme_1.shallow(React.createElement(PopoutBody_1.PopoutBody, { className: classname }));
        demand(component.find('div').prop('className')).include('Popout__body');
        demand(component.find('div').prop('className')).include(classname);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(PopoutBody_1.PopoutBody, null, children));
        demand(component.contains(children)).true();
    });
});
