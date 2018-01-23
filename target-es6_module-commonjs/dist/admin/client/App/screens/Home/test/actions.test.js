"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const actions_1 = require("../actions");
const constants_1 = require("../constants");
describe('<Home /> actions', () => {
    describe('countsLoaded()', () => {
        it('should return a type of COUNTS_LOADING_SUCCESS', () => {
            demand(actions_1.countsLoaded().type).eql(constants_1.COUNTS_LOADING_SUCCESS);
        });
        it('should pass the counts on', () => {
            const counts = { 'some/path': 100 };
            demand(actions_1.countsLoaded(counts).counts).eql(counts);
        });
    });
});
//# sourceMappingURL=actions.test.js.map