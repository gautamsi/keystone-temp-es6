"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const initialState = {
    counts: {},
    loading: false,
    error: null,
};
function homeReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.LOAD_COUNTS:
            return Object.assign({}, state, {
                loading: true,
            });
        case constants_1.COUNTS_LOADING_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                counts: action.counts,
                error: null,
            });
        case constants_1.COUNTS_LOADING_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}
exports.homeReducer = homeReducer;
