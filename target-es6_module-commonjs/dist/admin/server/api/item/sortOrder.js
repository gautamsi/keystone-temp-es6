"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../../lib/security/csrf");
/*
TODO: Needs Review and Spec
*/
const get_1 = require("../list/get");
function sortOrder(req, res) {
    const keystone = req.keystone;
    if (!csrf_1.validate(req)) {
        console.log('Refusing to reorder ' + req.list.key + ' ' + req.params.id + '; CSRF failure');
        return res.apiError(403, 'invalid csrf');
    }
    req.list.model.reorderItems(req.params.id, req.params.sortOrder, req.params.newOrder, function (err) {
        if (err)
            return res.apiError('database error', err);
        return get_1.get(req, res);
    });
}
exports.sortOrder = sortOrder;
