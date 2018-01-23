"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const actions_1 = require("../actions");
const constants_1 = require("../constants");
describe('<Item /> actions', () => {
    describe('selectItem()', () => {
        it('should have a type of SELECT_ITEM', () => {
            demand(actions_1.selectItem().type).eql(constants_1.SELECT_ITEM);
        });
        it('should pass on the itemId', () => {
            const itemId = 504;
            demand(actions_1.selectItem(itemId).id).eql(itemId);
        });
    });
    describe('dataLoaded()', () => {
        it('should have a type of DATA_LOADING_SUCCESS', () => {
            demand(actions_1.dataLoaded().type).eql(constants_1.DATA_LOADING_SUCCESS);
        });
        it('should pass on the data', () => {
            const data = { some: 'field' };
            demand(actions_1.dataLoaded(data).data).eql(data);
        });
    });
    describe('dataLoadingError()', () => {
        it('should have a type of DATA_LOADING_ERROR', () => {
            demand(actions_1.dataLoadingError().type).eql(constants_1.DATA_LOADING_ERROR);
        });
        it('should pass on the error', () => {
            const error = { some: 'error' };
            demand(actions_1.dataLoadingError(error).error).eql(error);
        });
    });
});
//# sourceMappingURL=actions.test.js.map