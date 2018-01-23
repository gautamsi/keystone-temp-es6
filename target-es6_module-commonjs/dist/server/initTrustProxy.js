"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initTrustProxy(keystone, app) {
    // Process 'X-Forwarded-For' request header
    if (keystone.get('trust proxy') === true) {
        app.enable('trust proxy');
    }
    else {
        app.disable('trust proxy');
    }
}
exports.initTrustProxy = initTrustProxy;
