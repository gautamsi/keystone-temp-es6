"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../../lib/security/csrf");
function signout(req, res) {
    const keystone = req.keystone;
    if (!csrf_1.validate(req)) {
        return res.apiError(403, 'invalid csrf');
    }
    const user = req.user;
    keystone.callHook(user, 'pre:signout', function (err) {
        if (err)
            return res.status(500).json({ error: 'pre:signout error', detail: err });
        res.clearCookie('keystone.uid');
        req.user = null;
        req.session.regenerate(function (err) {
            if (err)
                return res.status(500).json({ error: 'session error', detail: err });
            keystone.callHook(user, 'post:signout', function (err) {
                if (err)
                    return res.status(500).json({ error: 'post:signout error', detail: err });
                res.json({ success: true });
            });
        });
    });
}
exports.signout = signout;
