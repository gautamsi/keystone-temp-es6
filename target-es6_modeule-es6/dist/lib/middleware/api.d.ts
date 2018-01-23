/**
 * Adds shortcut methods for JSON API responses:
 *
 *   * `res.apiResponse(data)`
 *   * `res.apiError(key, err, msg, code)`
 *   * `res.apiNotFound(err, msg)`
 *   * `res.apiNotAllowed(err, msg)`
 *
 * ####Example:
 *
 *     app.all('/api*', keystone.middleware.api);
 *
 * @param {app.request} req
 * @param {app.response} res
 * @param {function} next
 * @api public
 */
export declare function api(keystone: any): (req: any, res: any, next: any) => void;
