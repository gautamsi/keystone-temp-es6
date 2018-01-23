"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const App_1 = require("../App");
const Mobile_1 = require("../components/Navigation/Mobile");
const Primary_1 = require("../components/Navigation/Primary");
const Secondary_1 = require("../components/Navigation/Secondary");
const Footer_1 = require("../components/Footer");
const LIST_PATH = 'some/path';
const LIST_KEY = 'somelist';
const LIST_SECTION = 'somesection';
describe('<App />', () => {
    before(() => {
        // Mock the API data we get back
        global.Keystone = {
            lists: {
                [LIST_KEY]: {
                    path: LIST_PATH,
                    key: LIST_KEY,
                    uiElements: [{
                            type: 'heading',
                            content: 'Hello World!',
                        }],
                },
            },
            nav: {
                by: {
                    list: {
                        [LIST_KEY]: LIST_SECTION,
                    },
                },
                sections: {},
            },
        };
    });
    it('should render the PrimaryNavigation', () => {
        const component = enzyme_1.shallow(React.createElement(App_1.App, { params: {} }));
        demand(component.find(Primary_1.PrimaryNavigation).length).eql(1);
    });
    it('should render the MobileNavigation', () => {
        const component = enzyme_1.shallow(React.createElement(App_1.App, { params: {} }));
        demand(component.find(Mobile_1.MobileNavigation).length).eql(1);
    });
    it('should render the SecondaryNavigation if we\'re on a list', () => {
        const component = enzyme_1.shallow(React.createElement(App_1.App, { params: {
                listId: LIST_PATH,
            } }));
        demand(component.find(Secondary_1.SecondaryNavigation).length).eql(1);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(App_1.App, { params: {} }, children));
        demand(component.contains(children)).true();
    });
    it('should render the footer', () => {
        const component = enzyme_1.shallow(React.createElement(App_1.App, { params: {} }));
        demand(component.find(Footer_1.Footer).length).eql(1);
    });
});
