"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const LoginForm_1 = require("../LoginForm");
describe('<LoginForm />', () => {
    it('should render a Form', () => {
        const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
        demand(component.find('Form').length).eql(1);
    });
    it('should not validate the Form', () => {
        const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
        demand(component.find('Form').prop('noValidate')).true();
    });
    describe('Form Fields', () => {
        it('should render two FormFields', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            demand(component.find('FormField').length).eql(2);
        });
        it('should render two FormInputs', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            demand(component.find('FormInput').length).eql(2);
        });
        it('should render a form field for the email field', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            const emailFormField = component.find('FormField').at(0);
            demand(emailFormField.prop('label')).eql('Email');
            demand(emailFormField.prop('htmlFor')).eql('email');
        });
        it('should render an input for the email field', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            const emailFormInput = component.find('FormInput').at(0);
            demand(emailFormInput.prop('type')).eql('email');
            demand(emailFormInput.prop('name')).eql('email');
        });
        it('should get the value of the email input from the props', () => {
            const email = 'max@thinkmill.com.au';
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, { email: email }));
            const emailFormInput = component.find('FormInput').at(0);
            demand(emailFormInput.prop('value')).eql(email);
        });
        it('should render a form field for the password field', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            const passwordFormField = component.find('FormField').at(1);
            demand(passwordFormField.prop('label')).eql('Password');
            demand(passwordFormField.prop('htmlFor')).eql('password');
        });
        it('should render an input for the password field', () => {
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
            const passwordFormInput = component.find('FormInput').at(1);
            demand(passwordFormInput.prop('type')).eql('password');
            demand(passwordFormInput.prop('name')).eql('password');
        });
        it('should get the value of the password input from the props', () => {
            const password = 'hunter2';
            const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, { password: password }));
            const passwordFormInput = component.find('FormInput').at(1);
            demand(passwordFormInput.prop('value')).eql(password);
        });
    });
    it('should render a submit button', () => {
        const component = enzyme_1.shallow(React.createElement(LoginForm_1.LoginForm, null));
        demand(component.find('Button').length).eql(1);
        demand(component.find('Button').prop('type')).eql('submit');
    });
});
