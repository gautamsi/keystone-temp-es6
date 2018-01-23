"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const _1 = require("../");
const NavItem_1 = require("../NavItem");
describe.skip('<PrimaryNavigation />', () => {
    before(() => {
        global.window = {
            innerWidth: 769,
        };
    });
    it('should render a <nav>', () => {
        const component = enzyme_1.shallow(React.createElement(_1.PrimaryNavigation, null));
        demand(component.find('nav').length).eql(1);
    });
    it('should render a <ul>', () => {
        const component = enzyme_1.shallow(React.createElement(_1.PrimaryNavigation, null));
        demand(component.find('ul').length).eql(1);
    });
    it('should render the brand and a home button', () => {
        const brand = 'Stoiber Weinhandel & Webdesign e.U.';
        const component = enzyme_1.shallow(React.createElement(_1.PrimaryNavigation, { brand: brand }));
        demand(component.find(NavItem_1.PrimaryNavItem).length).gt(0);
        demand(component.find(NavItem_1.PrimaryNavItem).at(0).prop('title')).include(brand);
        demand(component.find(NavItem_1.PrimaryNavItem).at(0).contains('span.octicon-home')).true();
    });
});
