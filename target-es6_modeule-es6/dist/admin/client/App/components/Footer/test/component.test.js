"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const _1 = require("../");
describe('<Footer />', () => {
    it('should render a <footer> tag', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Footer, null));
        demand(component.find('footer').type()).eql('footer');
        demand(component.find('footer').length).eql(1);
    });
    it('should have a data prop of "keystone-footer"', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Footer, null));
        demand(component.prop('data-keystone-footer')).eql(true);
    });
    // TODO FIX THIS, possibly a test problem
    it.skip('should render a link to KeystoneJS', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Footer, null));
        demand(component.find('a[href="http://keystonejs.com"]').length).eql(1);
    });
    describe('this.props', () => {
        it('should render a link to the backUrl', () => {
            const backUrl = '/home';
            const component = enzyme_1.shallow(React.createElement(_1.Footer, { backUrl: backUrl }));
            demand(component.find(`a[href="${backUrl}"]`).length).eql(1);
        });
        it('should render the brand', () => {
            const brand = 'My Company';
            const component = enzyme_1.shallow(React.createElement(_1.Footer, { brand: brand }));
            demand(component.contains(brand)).true();
        });
        // TODO FIX THIS, possibly test problem
        it.skip('should render the appversion', () => {
            const appversion = '2.0';
            const component = enzyme_1.shallow(React.createElement(_1.Footer, { appversion: appversion }));
            demand(component.contains(appversion)).true();
        });
        it('should render the KeystoneJS version', () => {
            const version = '1.0';
            const component = enzyme_1.shallow(React.createElement(_1.Footer, { version: version }));
            demand(component.contains(version)).true();
        });
        // TODO FIX THIS
        it.skip('should render the current user', () => {
            const User = {
                path: '/users',
                getDocumentName: (...args) => {
                    return 'Max Stoiber';
                },
            };
            const user = {
                id: 'max',
            };
            const component = enzyme_1.shallow(React.createElement(_1.Footer, { User: User, user: user }));
            demand(component.contains(User.getDocumentName(user))).true();
        });
    });
});
