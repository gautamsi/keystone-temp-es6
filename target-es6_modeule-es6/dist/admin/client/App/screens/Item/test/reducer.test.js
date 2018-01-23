"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const reducer_1 = require("../reducer");
const constants_1 = require("../constants");
describe('<Item /> reducer', () => {
    it('should return the initial state', () => {
        demand(reducer_1.itemReducer(undefined, {})).eql({
            data: null,
            id: null,
            loading: false,
            ready: false,
            error: null,
            relationshipData: {},
            drag: {
                clonedItems: false,
                newSortOrder: null,
                relationshipPath: false,
            },
        });
    });
    describe('SELECT_ITEM', () => {
        const state = {
            data: { some: 'data' },
            id: null,
            loading: false,
            ready: true,
            error: null,
        };
        it('should set ready to false', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.SELECT_ITEM,
            }).ready).false();
        });
        it('should set id to the passed id', () => {
            const id = 'someID';
            demand(reducer_1.itemReducer(state, {
                type: constants_1.SELECT_ITEM,
                id,
            }).id).eql(id);
        });
        it('should set data to null', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.SELECT_ITEM,
            }).data).null();
        });
    });
    describe('LOAD_DATA', () => {
        const state = {
            data: null,
            id: null,
            loading: false,
            ready: false,
            error: null,
        };
        it('should set loading to true', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.LOAD_DATA,
            }).loading).true();
        });
    });
    describe('DATA_LOADING_SUCCESS', () => {
        const state = {
            data: null,
            id: null,
            loading: true,
            ready: false,
            error: null,
        };
        it('should set loading to false', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_SUCCESS,
            }).loading).false();
        });
        it('should set ready to true', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_SUCCESS,
            }).ready).true();
        });
        it('should set error to null', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_SUCCESS,
            }).error).null();
        });
        it('should set data to the passed data', () => {
            const data = { some: 'data' };
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_SUCCESS,
                data,
            }).data).eql(data);
        });
    });
    describe('DATA_LOADING_ERROR', () => {
        const state = {
            data: null,
            id: null,
            loading: true,
            ready: false,
            error: null,
        };
        it('should set loading to false', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_ERROR,
            }).loading).false();
        });
        it('should set ready to true', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_ERROR,
            }).ready).true();
        });
        it('should set data to null', () => {
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_ERROR,
            }).data).null();
        });
        it('should set error to the passed error', () => {
            const error = { some: 'error' };
            demand(reducer_1.itemReducer(state, {
                type: constants_1.DATA_LOADING_ERROR,
                error,
            }).error).eql(error);
        });
    });
});
//# sourceMappingURL=reducer.test.js.map