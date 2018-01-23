"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const ConfirmationDialog_1 = require("../ConfirmationDialog");
const elemental_1 = require("elemental");
describe('<ConfirmationDialog />', () => {
    it('should render a Modal with a body and a footer', () => {
        const component = enzyme_1.shallow(React.createElement(ConfirmationDialog_1.ConfirmationDialog, null));
        demand(component.find(elemental_1.Modal.Dialog).length).equal(1);
        demand(component.find(elemental_1.Modal.Body).length).equal(1);
        demand(component.find(elemental_1.Modal.Footer).length).equal(1);
    });
    // TODO fix this test
    it.skip('should render some passed HTML', () => {
        const HTML = '<h1>Some <code>HTML</code> here!</h1>';
        const component = enzyme_1.shallow(React.createElement(ConfirmationDialog_1.ConfirmationDialog, { body: HTML }));
        demand(component.find('div').at(0).prop('dangerouslySetInnerHTML')).eql({
            __html: HTML,
        });
    });
    describe('buttons', () => {
        it('should render two buttons', () => {
            const component = enzyme_1.shallow(React.createElement(ConfirmationDialog_1.ConfirmationDialog, null));
            demand(component.find(elemental_1.Button).length).equal(2);
        });
        it('should render a button with a confirmation label', () => {
            const confirmationLabel = 'Confirm';
            const component = enzyme_1.shallow(React.createElement(ConfirmationDialog_1.ConfirmationDialog, { confirmationLabel: confirmationLabel }));
            demand(component.find(elemental_1.Button).at(0).contains(confirmationLabel)).true();
        });
        it('should render a button with a cancel label', () => {
            const cancelLabel = 'Confirm';
            const component = enzyme_1.shallow(React.createElement(ConfirmationDialog_1.ConfirmationDialog, { cancelLabel: cancelLabel }));
            demand(component.find(elemental_1.Button).at(1).contains(cancelLabel)).true();
        });
    });
});
