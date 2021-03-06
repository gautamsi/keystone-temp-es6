"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csrf_1 = require("../../../../lib/security/csrf");
function update(req, res) {
    const keystone = req.keystone;
    if (!csrf_1.validate(req)) {
        return res.apiError(403, 'invalid csrf');
    }
    req.list.model.findById(req.params.id, function (err, item) {
        if (err)
            return res.status(500).json({ error: 'database error', detail: err });
        if (!item)
            return res.status(404).json({ error: 'not found', id: req.params.id });
        req.list.updateItem(item, req.body, { files: req.files, user: req.user }, function (err) {
            if (err) {
                const status = err.error === 'validation errors' ? 400 : 500;
                const error = err.error === 'database error' ? err.detail : err;
                return res.apiError(status, error);
            }
            // Reload the item from the database to prevent save hooks or other
            // application specific logic from messing with the values in the item
            req.list.model.findById(req.params.id, function (err, updatedItem) {
                res.json(req.list.getData(updatedItem));
            });
        });
    });
}
exports.update = update;
