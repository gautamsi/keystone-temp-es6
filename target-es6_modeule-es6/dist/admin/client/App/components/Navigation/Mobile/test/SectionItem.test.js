"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const SectionItem_1 = require("../SectionItem");
const ListItem_1 = require("../ListItem");
const react_router_1 = require("react-router");
describe('<MobileSectionItem />', () => {
    before(() => {
        global.Keystone = {};
    });
    it('should render a react-router Link', () => {
        const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, null));
        demand(component.find(react_router_1.Link).length).eql(1);
    });
    it('should render its children', () => {
        const children = (React.createElement("h1", null, "Hello World!"));
        const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, null, children));
        demand(component.contains(children)).true();
    });
    it('should link to the href prop', () => {
        const href = 'someurl.com';
        const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, { href: href }));
        demand(component.find(react_router_1.Link).length).eql(1);
        demand(component.find(react_router_1.Link).at(0).prop('to')).eql(href);
    });
    describe('lists', () => {
        it('should not render any lists if an empty array is passed', () => {
            const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, { lists: [] }));
            demand(component.find(ListItem_1.MobileListItem).length).eql(0);
        });
        it('should not render any lists if only one is passed', () => {
            const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, { lists: [{
                        path: 'some/path',
                    }] }));
            demand(component.find(ListItem_1.MobileListItem).length).eql(0);
        });
        it('should render the lists if two are passed', () => {
            const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, { lists: [{
                        path: 'some/path',
                    }, {
                        path: 'some/other/path',
                    }] }));
            demand(component.find(ListItem_1.MobileListItem).length).eql(2);
        });
        it('should highlight the current list', () => {
            const currentListPath = 'some/path';
            const component = enzyme_1.shallow(React.createElement(SectionItem_1.MobileSectionItem, { lists: [{
                        path: currentListPath,
                    }, {
                        path: 'some/other/path',
                    }], currentListKey: currentListPath }));
            demand(component.find(ListItem_1.MobileListItem).length).eql(2);
            demand(component.find(ListItem_1.MobileListItem).at(0).prop('className'))
                .include('is-active');
        });
    });
});
