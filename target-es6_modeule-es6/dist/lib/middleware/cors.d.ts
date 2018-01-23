/**
 * Adds CORS headers to the response
 *
 * ####Example:
 *
 *     app.all('/api*', keystone.middleware.cors);
 *
 * @param {app.request} req
 * @param {app.response} res
 * @param {function} next
 * @api public
 */
export declare function cors(keystone: any): (req: any, res: any, next: any) => void;
