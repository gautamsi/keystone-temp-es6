"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../lib/security/csrf");
const ejs = require("ejs");
const path = require("path");
const templatePath = path.resolve(__dirname, '../templates/signin.html');
function SigninRoute(req, res) {
    const keystone = req.keystone;
    const UserList = keystone.list(keystone.get('user model'));
    const locals = {
        adminPath: '/' + keystone.get('admin path'),
        brand: keystone.get('brand'),
        csrf: { header: {} },
        logo: keystone.get('signin logo'),
        redirect: keystone.get('signin redirect'),
        user: req.user ? {
            id: req.user.id,
            name: UserList.getDocumentName(req.user) || '(no name)',
        } : undefined,
        userCanAccessKeystone: !!(req.user && req.user.canAccessKeystone),
    };
    locals.csrf.header[csrf_1.CSRF_HEADER_KEY] = csrf_1.getToken(req, res);
    ejs.renderFile(templatePath, locals, { delimiter: '%' }, function (err, str) {
        if (err) {
            console.error('Could not render Admin UI Signin Template:', err);
            return res.status(500).send(keystone.wrapHTMLError('Error Rendering Signin', err.message));
        }
        res.send(str);
    });
}
exports.SigninRoute = SigninRoute;
