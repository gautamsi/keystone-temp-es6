"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectFlash = require("connect-flash");
const session_1 = require("../lib/session");
function bindSessionMiddleware(keystone, app) {
    app.use(keystone.get('session options').cookieParser);
    // pre:session hooks
    if (typeof keystone.get('pre:session') === 'function') {
        keystone.get('pre:session')(app);
    }
    app.use(function (req, res, next) {
        keystone.callHook('pre:session', req, res, next);
    });
    app.use(keystone.expressSession);
    app.use(connectFlash());
    if (keystone.get('session') === true) {
        app.use(session_1.persist);
    }
    else if (typeof keystone.get('session') === 'function') {
        app.use(keystone.get('session'));
    }
}
exports.bindSessionMiddleware = bindSessionMiddleware;
