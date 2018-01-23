"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const elemental_1 = require("elemental");
const Alert_1 = require("../Alert");
describe('<Alert />', () => {
    it('should render an empty span if no props are specified', () => {
        const component = enzyme_1.shallow(React.createElement(Alert_1.AlertView, null));
        demand(component.equals(React.createElement("span", null))).true();
    });
    it('should render an error Alert if isInvalid is supplied', () => {
        const component = enzyme_1.shallow(React.createElement(Alert_1.AlertView, { isInvalid: true }));
        demand(component.find(elemental_1.Alert).length).eql(1);
        demand(component.find(elemental_1.Alert).prop('color')).eql('danger');
    });
    it('should render the error message in invalidMessage if isInvalid is supplied', () => {
        const invalidMessage = 'Some error has happened.';
        const component = enzyme_1.shallow(React.createElement(Alert_1.AlertView, { isInvalid: true, invalidMessage: invalidMessage }));
        demand(component.contains(invalidMessage)).true();
    });
    it('should render an info Alert if signedOut is true', () => {
        const component = enzyme_1.shallow(React.createElement(Alert_1.AlertView, { signedOut: true }));
        demand(component.find(elemental_1.Alert).length).eql(1);
        demand(component.find(elemental_1.Alert).prop('color')).eql('info');
    });
    it('should render a signed out text when signedOut is true', () => {
        const component = enzyme_1.shallow(React.createElement(Alert_1.AlertView, { signedOut: true }));
        demand(component.find(elemental_1.Alert).length).eql(1);
        demand(component.find(elemental_1.Alert).contains('You have been signed out.')).true();
    });
});
