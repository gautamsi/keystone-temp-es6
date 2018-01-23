"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const items_1 = require("../items");
const constants_1 = require("../../constants");
describe('<List> items actions', () => {
    describe('itemsLoaded()', () => {
        it('should have a type of ITEMS_LOADED', () => {
            demand(items_1.itemsLoaded().type).eql(constants_1.ITEMS_LOADED);
        });
        it('should pass on the items', () => {
            const items = [{ some: 'item' }];
            demand(items_1.itemsLoaded(items).items).eql(items);
        });
    });
});
