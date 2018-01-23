"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutListItem_1 = require("../PopoutListItem");
describe('<PopoutListItem />', () => {
    it('should render a button and a span', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListItem_1.PopoutListItem, null));
        demand(component.find('button').length).eql(1);
        demand(component.find('span').length).eql(1);
    });
    it('should have a classname of PopoutList__item', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListItem_1.PopoutListItem, null));
        demand(component.find('button').prop('className')).eql('PopoutList__item');
    });
    it('should have a selected classname', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListItem_1.PopoutListItem, { isSelected: true }));
        demand(component.find('button').prop('className')).eql('PopoutList__item is-selected');
    });
    it('should render an icon', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutListItem_1.PopoutListItem, { icon: "globe" }));
        demand(component.find('span').length).eql(2);
        demand(component.find('span').at(0).prop('className').indexOf('octicon-globe') > -1).true();
    });
    it('should render a label', () => {
        const label = 'Some label';
        const component = enzyme_1.shallow(React.createElement(PopoutListItem_1.PopoutListItem, { label: label }));
        demand(component.contains(label)).true();
    });
});
