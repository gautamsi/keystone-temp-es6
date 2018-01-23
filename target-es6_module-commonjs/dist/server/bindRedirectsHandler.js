"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bindRedirectsHandler(keystone, app) {
    if (Object.keys(keystone._redirects).length) {
        app.use(function (req, res, next) {
            if (keystone._redirects[req.path]) {
                res.redirect(keystone._redirects[req.path]);
            }
            else {
                next();
            }
        });
    }
}
exports.bindRedirectsHandler = bindRedirectsHandler;