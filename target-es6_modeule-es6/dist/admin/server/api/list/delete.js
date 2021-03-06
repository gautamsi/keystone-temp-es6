import { validate } from '../../../../lib/security/csrf';
import * as async from 'async';
export function delete_(req, res) {
    const keystone = req.keystone;
    if (!validate(req)) {
        console.log('Refusing to delete ' + req.list.key + ' items; CSRF failure');
        return res.apiError(403, 'invalid csrf');
    }
    if (req.list.get('nodelete')) {
        console.log('Refusing to delete ' + req.list.key + ' items; List.nodelete is true');
        return res.apiError(400, 'nodelete');
    }
    let ids = req.body.ids || req.body.id || req.params.id;
    if (typeof ids === 'string') {
        ids = ids.split(',');
    }
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    if (req.user) {
        const checkResourceId = (keystone.get('user model') === req.list.key);
        const userId = String(req.user.id);
        // check if user can delete this resources based on resources ids and userId
        if (checkResourceId && ids.some(function (id) {
            return id === userId;
        })) {
            console.log('Refusing to delete ' + req.list.key + ' items; ids contains current User id');
            return res.apiError(403, 'not allowed', 'You can not delete yourself');
        }
    }
    let deletedCount = 0;
    const deletedIds = [];
    req.list.model.find().where('_id').in(ids).exec(function (err, results) {
        if (err) {
            console.log('Error deleting ' + req.list.key + ' items:', err);
            return res.apiError('database error', err);
        }
        async.forEachLimit(results, 10, function (item, next) {
            item.remove(function (err) {
                if (err)
                    return next(err);
                deletedCount++;
                deletedIds.push(item.id);
                next();
            });
        }, function () {
            return res.json({
                success: true,
                ids: deletedIds,
                count: deletedCount,
            });
        });
    });
}
