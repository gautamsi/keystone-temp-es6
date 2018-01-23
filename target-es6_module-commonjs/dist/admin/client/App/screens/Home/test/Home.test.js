"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const enzyme_1 = require("enzyme");
const index_1 = require("../index");
const AlertMessages_1 = require("../../../shared/AlertMessages");
const Section_1 = require("../components/Section");
const Lists_1 = require("../components/Lists");
describe('<Home />', () => {
    before(() => {
        global.Keystone = {
            nav: {
                sections: [],
            },
            orphanedLists: [],
            lists: [],
        };
    });
    it('should have a data-screen-id for e2e testing', () => {
        const component = enzyme_1.shallow(React.createElement(index_1.HomeView, null));
        demand(component.prop('data-screen-id')).eql('home');
    });
    it('should render the brand', () => {
        const brand = 'Some Brand';
        global.Keystone.brand = brand;
        const component = enzyme_1.shallow(React.createElement(index_1.HomeView, null));
        demand(component.contains(brand)).true();
        delete global.Keystone.brand;
    });
    it('should render a generic error message', () => {
        const component = enzyme_1.shallow(React.createElement(index_1.HomeView, { error: "Some error" }));
        demand(component.find(AlertMessages_1.AlertMessages).length).eql(1);
        demand(component.find(AlertMessages_1.AlertMessages).at(0).prop('alerts')).eql({
            error: {
                error: "There is a problem with the network, we're trying to reconnect...",
            }
        });
    });
    // Sections are only rendered for the grouped nav
    it('should render a grouped nav by default', () => {
        global.Keystone.nav.sections = [{
                lists: [],
            }];
        const component = enzyme_1.shallow(React.createElement(index_1.HomeView, null));
        demand(component.find(Section_1.Section).length).gt(0);
        Keystone.nav.sections = [];
    });
    it('should render a flat nav if specified', () => {
        global.Keystone.nav.flat = true;
        const component = enzyme_1.shallow(React.createElement(index_1.HomeView, null));
        demand(component.find(Section_1.Section).length).eql(0);
        delete global.Keystone.nav.flat;
    });
    describe('orphaned lists', () => {
        it('should render orphaned lists', () => {
            const orphanedLists = [{}, {}, {}];
            global.Keystone.orphanedLists = orphanedLists;
            const component = enzyme_1.shallow(React.createElement(index_1.HomeView, { counts: {} }));
            demand(component.find(Lists_1.Lists).length).eql(1);
            demand(component.find(Lists_1.Lists).at(0).prop('lists')).eql(orphanedLists);
            delete global.Keystone.orphanedLists;
        });
        it('should render a section label of "Other"', () => {
            const orphanedLists = [{}, {}, {}];
            global.Keystone.orphanedLists = orphanedLists;
            const component = enzyme_1.shallow(React.createElement(index_1.HomeView, { counts: {} }));
            demand(component.find(Section_1.Section).at(0).prop('label')).eql('Other');
            delete global.Keystone.orphanedLists;
        });
    });
});
