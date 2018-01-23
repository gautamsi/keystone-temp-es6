"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutListHeading_1 = require("../PopoutListHeading");
describe('<PopoutListHeading />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListHeading_1.PopoutListHeading, null));
        demand(component.find('div').length).eql(1);
    });
    it('should have a class of PopoutList__heading', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListHeading_1.PopoutListHeading, null));
        demand(component.find('div').prop('className')).eql('PopoutList__heading');
    });
    it('should have a class of PopoutList__heading even when another class is passed', () => {
        const classname = 'something__else';
        const component = enzyme_1.shallow(React.createElement(PopoutListHeading_1.PopoutListHeading, { className: classname }));
        demand(component.find('div').prop('className')).include('PopoutList__heading');
        demand(component.find('div').prop('className')).include(classname);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(PopoutListHeading_1.PopoutListHeading, null, children));
        demand(component.contains(children)).true();
    });
});
