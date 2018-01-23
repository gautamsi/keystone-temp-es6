"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const demand = require("must");
const enzyme_1 = require("enzyme");
const Lists_1 = require("../Lists");
const ListTile_1 = require("../ListTile");
describe('<Lists />', () => {
    it('should render the lists', () => {
        const lists = [{}, {}];
        const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: {} }));
        demand(component.find(ListTile_1.ListTile).length).eql(lists.length);
    });
    it('should not prefix the admin url for external lists', () => {
        const externalPath = 'http://someurl.com/some/path';
        const internalPath = 'some/path';
        const lists = [{
                external: true,
                path: externalPath,
            }, {
                path: internalPath,
            }];
        const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: {} }));
        demand(component.find(ListTile_1.ListTile).at(0).prop('href')).eql(externalPath);
    });
    it('should render counts', () => {
        const lists = [
            {
                key: 'somekey',
                path: 'some/path',
            },
        ];
        const counts = {
            somekey: 50,
        };
        const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: counts }));
        demand(component.find(ListTile_1.ListTile).at(0).prop('count')).eql('50 Items');
    });
    it('should change the pluralization of the counts', () => {
        const lists = [
            {
                key: 'somekey',
                path: 'some/path',
            }, {
                key: 'someotherkey',
                path: 'some/other/path',
            },
        ];
        const counts = {
            somekey: 1,
            someotherkey: 100,
        };
        const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: counts }));
        demand(component.find(ListTile_1.ListTile).at(0).prop('count')).eql('1 Item');
        demand(component.find(ListTile_1.ListTile).at(1).prop('count')).eql('100 Items');
    });
    it('should hide the create button if it\'s a nocreate list', () => {
        const internalPath = 'some/path';
        const lists = [{
                path: internalPath,
            }];
        const listData = {
            [internalPath]: {
                nocreate: true,
            },
        };
        const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: listData, counts: {} }));
        demand(component.find(ListTile_1.ListTile).at(0).prop('hideCreateButton')).true();
    });
    describe('lists object', () => {
        it('should allow lists to be an object', () => {
            const lists = {
                somekey: {
                    path: 'some/path',
                },
                someotherkey: {
                    path: 'some/other/path',
                },
            };
            const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: {} }));
            demand(component.find(ListTile_1.ListTile).length).eql(Object.keys(lists).length);
        });
        it('should render counts', () => {
            const lists = {
                somekey: {
                    path: 'some/path',
                },
            };
            const counts = {
                somekey: 50,
            };
            const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: counts }));
            demand(component.find(ListTile_1.ListTile).at(0).prop('count')).eql('50 Items');
        });
        it('should change the pluralization of the counts', () => {
            const lists = {
                somekey: {
                    path: 'some/path',
                },
                someotherkey: {
                    path: 'some/other/path',
                },
            };
            const counts = {
                somekey: 1,
                someotherkey: 100,
            };
            const component = enzyme_1.shallow(React.createElement(Lists_1.Lists, { lists: lists, listsData: {}, counts: counts }));
            demand(component.find(ListTile_1.ListTile).at(0).prop('count')).eql('1 Item');
            demand(component.find(ListTile_1.ListTile).at(1).prop('count')).eql('100 Items');
        });
    });
});
