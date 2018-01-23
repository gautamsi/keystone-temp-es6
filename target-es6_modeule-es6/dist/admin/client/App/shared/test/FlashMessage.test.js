"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const FlashMessage_1 = require("../FlashMessage");
const elemental_1 = require("elemental");
describe('<FlashMessage />', () => {
    it('should render an Alert', () => {
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: {} }));
        demand(component.find(elemental_1.Alert).length).equal(1);
    });
    it('should take the Alert type from the props', () => {
        const type = 'danger';
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { type: type, message: {} }));
        demand(component.find(elemental_1.Alert).at(0).prop('color')).eql(type);
    });
    it('should render a span if the message is a string', () => {
        const message = 'Some message';
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: message }));
        demand(component.find('span').length).equal(1);
        demand(component.contains(message)).true();
    });
    it('should render the title as a h4 if it exists', () => {
        const title = 'Some message title';
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: {
                title,
            } }));
        demand(component.find('h4').length).equal(1);
        demand(component.find('h4').at(0).contains(title)).true();
    });
    it('should render the detail as a p if it exists', () => {
        const detail = 'Some message detail';
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: {
                detail,
            } }));
        demand(component.find('p').length).equal(1);
        demand(component.find('p').at(0).contains(detail)).true();
    });
    it('should render a list of messages', () => {
        const list = [
            'Some list item',
            'A second list item',
        ];
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: {
                list,
            } }));
        demand(component.find('ul').length).equal(1);
        demand(component.find('li').length).equal(list.length);
        demand(component.find('li').at(0).contains(list[0])).true();
        demand(component.find('li').at(1).contains(list[1])).true();
    });
    it('should render all three of those at the same time', () => {
        const list = [
            'Some list item',
            'A second list item',
        ];
        const detail = 'Some message detail';
        const title = 'Some message title';
        const component = enzyme_1.shallow(React.createElement(FlashMessage_1.FlashMessage, { message: {
                list,
                detail,
                title,
            } }));
        demand(component.find('ul').length).equal(1);
        demand(component.find('li').length).equal(list.length);
        demand(component.find('li').at(0).contains(list[0])).true();
        demand(component.find('li').at(1).contains(list[1])).true();
        demand(component.find('p').length).equal(1);
        demand(component.find('p').at(0).contains(detail)).true();
        demand(component.find('h4').length).equal(1);
        demand(component.find('h4').at(0).contains(title)).true();
    });
});
