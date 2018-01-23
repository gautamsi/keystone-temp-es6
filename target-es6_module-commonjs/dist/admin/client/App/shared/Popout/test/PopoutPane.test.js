"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutPane_1 = require("../PopoutPane");
describe('<PopoutPane />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutPane_1.PopoutPane, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of Popout__pane', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutPane_1.PopoutPane, null));
        demand(component.find('div').prop('className')).eql('Popout__pane');
    });
    it('should have a class of Popout__pane even when another class is passed', () => {
        const classname = 'something__else';
        const component = enzyme_1.shallow(React.createElement(PopoutPane_1.PopoutPane, { className: classname }));
        demand(component.find('div').prop('className')).include('Popout__pane');
        demand(component.find('div').prop('className')).include(classname);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(PopoutPane_1.PopoutPane, null, children));
        demand(component.contains(children)).true();
    });
});
