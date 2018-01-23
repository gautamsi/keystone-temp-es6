"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../../lib/security/csrf");
function create(req, res) {
    const keystone = req.keystone;
    if (!csrf_1.validate(req)) {
        return res.apiError(403, 'invalid csrf');
    }
    const item = new req.list.model();
    req.list.updateItem(item, req.body, {
        files: req.files,
        ignoreNoEdit: true,
        user: req.user,
    }, function (err) {
        if (err) {
            const status = err.error === 'validation errors' ? 400 : 500;
            const error = err.error === 'database error' ? err.detail : err;
            return res.apiError(status, error);
        }
        res.json(req.list.getData(item));
    });
}
exports.create = create;
