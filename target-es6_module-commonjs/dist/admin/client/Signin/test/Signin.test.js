"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const Signin_1 = require("../Signin");
const Brand_1 = require("../components/Brand");
const LoginForm_1 = require("../components/LoginForm");
describe('<Signin />', () => {
    before(() => {
        global.window = {
            location: {},
        };
    });
    it('should render a div', () => {
        const component = enzyme_1.shallow(React.createElement(Signin_1.SigninView, null));
        demand(component.find('div').length).gt(0);
    });
    it('should render the brand', () => {
        const component = enzyme_1.shallow(React.createElement(Signin_1.SigninView, null));
        demand(component.find(Brand_1.Brand).length).gt(0);
    });
    it('should render the login form', () => {
        const component = enzyme_1.shallow(React.createElement(Signin_1.SigninView, null));
        demand(component.find(LoginForm_1.LoginForm).length).gt(0);
    });
});
