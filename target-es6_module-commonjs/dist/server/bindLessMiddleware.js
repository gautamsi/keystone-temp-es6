"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const less = require("less-middleware");
function bindLessMiddleware(keystone, app) {
    // the less option can be a single path, or array of paths
    // when set, we configure the less middleware
    let lessPaths = keystone.get('less');
    const lessOptions = keystone.get('less options') || {};
    if (typeof lessPaths === 'string') {
        lessPaths = [lessPaths];
    }
    if (Array.isArray(lessPaths)) {
        lessPaths.forEach(function (path) {
            app.use(less(keystone.expandPath(path), lessOptions));
        });
    }
}
exports.bindLessMiddleware = bindLessMiddleware;
