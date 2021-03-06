"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../../lib/security/csrf");
const utils = require("keystone-utils");
const session_1 = require("../../../../lib/session");
function signin(req, res) {
    const keystone = req.keystone;
    if (!csrf_1.validate(req)) {
        return res.apiError(403, 'invalid csrf');
    }
    if (!req.body.email || !req.body.password) {
        return res.status(401).json({ error: 'email and password required' });
    }
    const User = keystone.list(keystone.get('user model'));
    const emailRegExp = new RegExp('^' + utils.escapeRegExp(req.body.email) + '$', 'i');
    User.model.findOne({ email: emailRegExp }).exec(function (err, user) {
        if (user) {
            keystone.callHook(user, 'pre:signin', req, function (err) {
                if (err)
                    return res.status(500).json({ error: 'pre:signin error', detail: err });
                user._.password.compare(req.body.password, function (err, isMatch) {
                    if (isMatch) {
                        session_1.signinWithUser(user, req, res, function () {
                            keystone.callHook(user, 'post:signin', req, function (err) {
                                if (err)
                                    return res.status(500).json({ error: 'post:signin error', detail: err });
                                res.json({ success: true, user: user });
                            });
                        });
                    }
                    else if (err) {
                        return res.status(500).json({ error: 'bcrypt error', detail: err });
                    }
                    else {
                        return res.status(401).json({ error: 'invalid details' });
                    }
                });
            });
        }
        else if (err) {
            return res.status(500).json({ error: 'database error', detail: err });
        }
        else {
            return res.status(401).json({ error: 'invalid details' });
        }
    });
}
exports.signin = signin;
