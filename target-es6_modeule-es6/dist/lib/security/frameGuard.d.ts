/**
 * Adds iframe protection headers to the response
 *
 * ####Example:
 *
 *     app.use(keystone.security.frameGuard(keystone));
 *
 * @param {app.request} req
 * @param {app.response} res
 * @param {function} next
 * @api public
 */
export declare function frameGuard(keystone: any): (req: any, res: any, next: any) => void;
