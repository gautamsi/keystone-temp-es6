"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const reducer_1 = require("../reducer");
const constants_1 = require("../constants");
describe('<Home /> reducer', () => {
    it('should return the initial state', () => {
        demand(reducer_1.default(undefined, {})).eql({
            counts: {},
            loading: false,
            error: null,
        });
    });
    it('should set loading to true when LOAD_COUNTS comes in', () => {
        demand(reducer_1.default(undefined, {
            type: constants_1.LOAD_COUNTS,
        }).loading).true();
    });
    it('should set loading to false when COUNTS_LOADING_SUCCESS comes in', () => {
        const state = {
            counts: {},
            loading: true,
            error: null,
        };
        demand(reducer_1.default(state, {
            type: constants_1.COUNTS_LOADING_SUCCESS,
        }).loading).false();
    });
    it('should set error to null when COUNTS_LOADING_SUCCESS comes in', () => {
        const state = {
            counts: {},
            loading: true,
            error: 'something',
        };
        demand(reducer_1.default(state, {
            type: constants_1.COUNTS_LOADING_SUCCESS,
        }).error).null();
    });
    it('should set counts to counts when COUNTS_LOADING_SUCCESS comes in', () => {
        const state = {
            counts: {},
            loading: true,
            error: 'something',
        };
        const counts = { 'some/list': 100 };
        demand(reducer_1.default(state, {
            type: constants_1.COUNTS_LOADING_SUCCESS,
            counts,
        }).counts).eql(counts);
    });
    it('should set error to error when COUNTS_LOADING_ERROR comes in', () => {
        const state = {
            counts: {},
            loading: true,
            error: null,
        };
        const error = { code: 404 };
        demand(reducer_1.default(state, {
            type: constants_1.COUNTS_LOADING_ERROR,
            error,
        }).error).eql(error);
    });
    it('should set loading to false when COUNTS_LOADING_ERROR comes in', () => {
        const state = {
            counts: {},
            loading: true,
            error: null,
        };
        const error = { code: 404 };
        demand(reducer_1.default(state, {
            type: constants_1.COUNTS_LOADING_ERROR,
            error,
        }).loading).eql(false);
    });
});
//# sourceMappingURL=reducer.test.js.map