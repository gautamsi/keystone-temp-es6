"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const active_1 = require("../active");
const constants_1 = require("../../constants");
describe('<List /> active actions', () => {
    describe('setActiveSearch()', () => {
        it('should have a type of SET_ACTIVE_SEARCH', () => {
            demand(active_1.setActiveSearch().type).eql(constants_1.SET_ACTIVE_SEARCH);
        });
        it('should pass on the passed string', () => {
            const string = 'some string';
            demand(active_1.setActiveSearch(string).searchString).eql(string);
        });
    });
    describe('setActiveList()', () => {
        it('should have a type of SET_ACTIVE_LIST', () => {
            demand(active_1.setActiveList().type).eql(constants_1.SET_ACTIVE_LIST);
        });
        it('should pass on the passed list', () => {
            const list = 'Some List';
            demand(active_1.setActiveList(list).list).eql(list);
        });
        it('should pass on the passed id', () => {
            const id = 'somelongid';
            demand(active_1.setActiveList(undefined, id).id).eql(id);
        });
    });
    describe('clearCachedQuery()', function () {
        it('should have a type of CLEAR_CACHED_QUERY', () => {
            demand(active_1.clearCachedQuery().type).eql(constants_1.CLEAR_CACHED_QUERY);
        });
    });
});
