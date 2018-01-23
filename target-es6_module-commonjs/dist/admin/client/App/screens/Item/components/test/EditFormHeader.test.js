"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const EditFormHeader_1 = require("../EditFormHeader");
const enzyme_1 = require("enzyme");
const Toolbar_1 = require("../Toolbar");
const ToolbarSection_1 = require("../Toolbar/ToolbarSection");
const elemental_1 = require("elemental");
const react_router_1 = require("react-router");
describe('<EditFormHeader />', () => {
    before(() => {
        global.Keystone = {
            adminPath: '',
            csrf: {},
        };
    });
    it('should render a Toolbar', () => {
        const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
        demand(component.find(Toolbar_1.Toolbar).length).gt(0);
    });
    describe('Drilldown', () => {
        it('should render a Toolbar Section on the left', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
            demand(component.find(ToolbarSection_1.ToolbarSection).length).gt(0);
            demand(component.find(ToolbarSection_1.ToolbarSection).at(0).prop('left')).true();
        });
        // TODO @mxstbr - It really seems like this should be passing ??
        it.skip('should render a link back to the list if no items are specified', () => {
            const path = 'some/path';
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {
                    path,
                } }));
            demand(component.find('.e2e-editform-header-back').length).eql(1);
            demand(component.find('.e2e-editform-header-back').at(0).prop('to')).eql('/' + path);
        });
        it.skip('should render items passed in', () => {
            const items = [{
                    href: 'some/item',
                }, {
                    href: 'some/other/item',
                }];
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {
                    drilldown: {
                        items: [{
                                list: {},
                                items,
                            }],
                    },
                }, list: {} }));
            const BACKBUTTON = 1;
            demand(component.find(react_router_1.Link).length).eql(BACKBUTTON + items.length);
        });
        it.skip('should render one less separator then there\'s items', () => {
            const items = [{
                    href: 'some/item',
                }, {
                    href: 'some/other/item',
                }];
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {
                    drilldown: {
                        items: [{
                                list: {},
                                items,
                            }],
                    },
                }, list: {} }));
            demand(component.find('.separator').length).eql(items.length - 1);
        });
        it.skip('should render ... if there\'s more items', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {
                    drilldown: {
                        items: [{
                                list: {},
                                more: true,
                                items: [],
                            }],
                    },
                }, list: {} }));
            demand(component.contains('...')).true();
        });
        it.skip('should render a back button if there\'s items', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {
                    drilldown: {
                        items: [{
                                list: {},
                                more: true,
                                items: [],
                            }],
                    },
                }, list: {} }));
            demand(component.find('.e2e-editform-header-back').length).eql(1);
        });
        it('should render a search form', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
            demand(component.find('form.EditForm__header__search').length).eql(1);
        });
        // TODO needs to be reconfigured
        it.skip('should render a search input', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
            demand(component.find(elemental_1.FormInput).length).eql(1);
            demand(component.find(elemental_1.FormInput).at(0).prop('type')).eql('search');
        });
    });
    describe('Info', () => {
        it('should render a Toolbar Section on the right', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
            demand(component.find(ToolbarSection_1.ToolbarSection).length).gt(0);
            demand(component.find(ToolbarSection_1.ToolbarSection).at(1).prop('right')).true();
        });
        it.skip('should render a create button', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {} }));
            demand(component.find(elemental_1.Button).find(elemental_1.ResponsiveText).at(0).prop('visibleXS')).eql('Create');
        });
        it('should not render a create button if the list is a nocreate', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {
                    nocreate: true,
                } }));
            demand(component.find(elemental_1.Button).length).eql(0);
        });
        it.skip('should change the href if the list is an autocreate', () => {
            const component = enzyme_1.shallow(React.createElement(EditFormHeader_1.EditFormHeader, { data: {}, list: {
                    autocreate: true,
                } }));
            demand(component.find(elemental_1.Button).prop('href')).include('?new');
        });
    });
});
