"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const PopoutFooter_1 = require("../PopoutFooter");
describe('<PopoutFooter />', () => {
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(PopoutFooter_1.PopoutFooter, null));
        demand(component.find('div').length).eql(1);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(PopoutFooter_1.PopoutFooter, null, children));
        demand(component.contains(children)).true();
    });
    describe('buttons', () => {
        it('should render a primary button', () => {
            const label = 'Some action';
            const component = enzyme_1.shallow(React.createElement(PopoutFooter_1.PopoutFooter, { primaryButtonLabel: label }));
            demand(component.find('button').length).eql(1);
            demand(component.find('button').at(0).contains(label)).true();
        });
        it('should render a submit button', () => {
            const label = 'Some action';
            const component = enzyme_1.shallow(React.createElement(PopoutFooter_1.PopoutFooter, { primaryButtonLabel: label, primaryButtonIsSubmit: true }));
            demand(component.find('button').length).eql(1);
            demand(component.find('button').prop('type')).eql('submit');
        });
        it('should render a secondary button', () => {
            const label = 'Some action';
            const component = enzyme_1.shallow(React.createElement(PopoutFooter_1.PopoutFooter, { secondaryButtonLabel: label, secondaryButtonAction: function () { } }));
            demand(component.find('button').length).eql(1);
            demand(component.find('button').at(0).contains(label)).true();
        });
    });
});
