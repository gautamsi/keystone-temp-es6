"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const _1 = require("../");
const constants_1 = require("../../constants");
describe('<List /> actions', () => {
    describe('setCurrentPage', () => {
        it('should have a type of SET_CURRENT_PAGE', () => {
            demand(_1.setCurrentPage().type).eql(constants_1.SET_CURRENT_PAGE);
        });
        it('should pass on the page index', () => {
            const index = 25;
            demand(_1.setCurrentPage(index).index).eql(index);
        });
    });
});
