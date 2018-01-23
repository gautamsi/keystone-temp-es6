"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xhr = require("xhr");
const constants_1 = require("./constants");
const constants_2 = require("../../../constants");
/**
 * Load the counts of all lists
 */
function loadCounts() {
    return (dispatch) => {
        dispatch({
            type: constants_1.LOAD_COUNTS,
        });
        xhr({
            url: `${Keystone.adminPath}/api/counts`,
        }, (err, resp, body) => {
            if (err) {
                dispatch(countsLoadingError(err));
                return;
            }
            try {
                body = JSON.parse(body);
                if (body.counts) {
                    dispatch(countsLoaded(body.counts));
                }
            }
            catch (e) {
                console.log('Error parsing results json:', e, body);
                dispatch(countsLoadingError(e));
                return;
            }
        });
    };
}
exports.loadCounts = loadCounts;
/**
 * Dispatched when the counts were loaded
 *
 * @param  {Object} counts The counts object as returned by the API
 */
function countsLoaded(counts) {
    return {
        type: constants_1.COUNTS_LOADING_SUCCESS,
        counts,
    };
}
exports.countsLoaded = countsLoaded;
/**
 * Dispatched when unsuccessfully trying to load the counts, will redispatch
 * loadCounts after NETWORK_ERROR_RETRY_DELAY until we get counts back
 *
 * @param  {object} error The error
 */
function countsLoadingError(error) {
    return (dispatch, getState) => {
        dispatch({
            type: constants_1.COUNTS_LOADING_ERROR,
            error,
        });
        setTimeout(() => {
            dispatch(loadCounts());
        }, constants_2.NETWORK_ERROR_RETRY_DELAY);
    };
}
exports.countsLoadingError = countsLoadingError;
