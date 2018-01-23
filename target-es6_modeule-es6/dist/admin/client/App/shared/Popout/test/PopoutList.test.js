"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutList_1 = require("../PopoutList");
describe('<PopoutList />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutList_1.PopoutList, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of PopoutList', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutList_1.PopoutList, null));
        demand(component.find('div').prop('className')).eql('PopoutList');
    });
    it('should have a class of PopoutList even when another class is passed', () => {
        const classname = 'something__else';
        const component = enzyme_1.shallow(React.createElement(PopoutList_1.PopoutList, { className: classname }));
        demand(component.find('div').prop('className')).include('PopoutList');
        demand(component.find('div').prop('className')).include(classname);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(PopoutList_1.PopoutList, null, children));
        demand(component.contains(children)).true();
    });
});
