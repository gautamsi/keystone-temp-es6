"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const FlashMessage_1 = require("../FlashMessage");
const FlashMessages_1 = require("../FlashMessages");
describe('<FlashMessages />', () => {
    it('should render null if no messages are provided', () => {
        const component = enzyme_1.shallow(React.createElement(FlashMessages_1.FlashMessages, null));
        demand(component.type()).eql(null);
    });
    it('should render an empty div if theres no messages in a type', () => {
        const component = enzyme_1.shallow(React.createElement(FlashMessages_1.FlashMessages, { messages: true }));
        demand(component.find('div').length).eql(1);
    });
    describe('messages', () => {
        it('should render an error message as a FlashMessage', () => {
            const messages = {
                error: [{
                        title: 'Some error',
                    }],
            };
            const component = enzyme_1.shallow(React.createElement(FlashMessages_1.FlashMessages, { messages: messages }));
            demand(component.find(FlashMessage_1.FlashMessage).length).eql(messages.error.length);
            demand(component.find(FlashMessage_1.FlashMessage).at(0).prop('type'))
                .eql('error');
            demand(component.find(FlashMessage_1.FlashMessage).at(0).prop('message'))
                .eql(messages.error[0]);
        });
        it('should render multple error messages', () => {
            const messages = {
                error: [{
                        title: 'Some error',
                    }, {
                        title: 'Some other error',
                    }, {
                        title: 'And another one,',
                    }],
            };
            const component = enzyme_1.shallow(React.createElement(FlashMessages_1.FlashMessages, { messages: messages }));
            demand(component.find(FlashMessage_1.FlashMessage).length).eql(messages.error.length);
            demand(component.find(FlashMessage_1.FlashMessage).at(0).prop('type'))
                .eql('error');
            demand(component.find(FlashMessage_1.FlashMessage).at(0).prop('message'))
                .eql(messages.error[0]);
            demand(component.find(FlashMessage_1.FlashMessage).at(1).prop('type'))
                .eql('error');
            demand(component.find(FlashMessage_1.FlashMessage).at(1).prop('message'))
                .eql(messages.error[1]);
            demand(component.find(FlashMessage_1.FlashMessage).at(2).prop('type'))
                .eql('error');
            demand(component.find(FlashMessage_1.FlashMessage).at(2).prop('message'))
                .eql(messages.error[2]);
        });
    });
});
