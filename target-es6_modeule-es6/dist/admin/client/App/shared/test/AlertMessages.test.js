"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const AlertMessages_1 = require("../AlertMessages");
const elemental_1 = require("elemental");
describe('<AlertMessages />', () => {
    it('should render null if no message is passed', () => {
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, null));
        demand(component.type()).eql(null);
    });
    // TODO needs to be fixed
    it.skip('should render a success Alert on success', () => {
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                success: {
                    success: 'Something went right!',
                },
            } }));
        demand(component.find(elemental_1.Alert).length).gt(0);
        demand(component.find({ type: 'success' }).length).gt(0);
    });
    // TODO needs to be fixed
    it.skip('should render an error message', () => {
        const errorMsg = 'Something went wrong!';
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                error: {
                    error: errorMsg,
                },
            } }));
        demand(component.find(elemental_1.Alert).length).gt(0);
        demand(component.find({ type: 'danger' }).length).gt(0);
        demand(component.contains(errorMsg)).true();
    });
    // TODO needs to be fixed
    it.skip('should render "error" if no validation error is specified', () => {
        const errorMsg = 'error';
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                error: {
                    error: errorMsg,
                    detail: {
                        name: 'Not A ValidationError',
                    },
                },
            } }));
        demand(component.find(elemental_1.Alert).length).gt(0);
        demand(component.find({ type: 'danger' }).length).gt(0);
        demand(component.contains('Error')).true();
    });
    // TODO needs to be fixed
    it.skip('should render a single validation error', () => {
        const errorPath = 'some/path';
        const errorMsg = 'Some Validation Error';
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                error: {
                    error: 'validation errors',
                    detail: {
                        [errorPath]: {
                            error: errorMsg,
                        },
                    },
                },
            } }));
        demand(component.contains(errorMsg)).true();
    });
    // TODO needs to be fixed
    it.skip('should render a single validation error passed in a different format', () => {
        const errorPath = 'some/path';
        const errorMsg = 'Some error message';
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                error: {
                    error: errorMsg,
                    detail: {
                        name: 'ValidationError',
                        errors: {
                            [errorPath]: {
                                error: errorMsg,
                            },
                        },
                    },
                },
            } }));
        demand(component.contains(errorMsg)).true();
    });
    it('should render multiple validation errors', () => {
        const errors = {
            'some/path': {
                error: 'Some Validation Error',
            },
            'some/other/path': {
                error: 'Some Other Validation Error',
            },
        };
        const component = enzyme_1.shallow(React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                error: {
                    error: 'validation errors',
                    detail: errors,
                },
            } }));
        demand(component.contains(errors['some/path'].error)).true();
        demand(component.contains(errors['some/other/path'].error)).true();
        demand(component.find('li').length).equal(2);
    });
});
