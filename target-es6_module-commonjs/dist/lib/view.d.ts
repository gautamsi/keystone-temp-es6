/// <reference types="express" />
import { Request, Response } from 'express';
/**
 * View Constructor
 * =================
 *
 * Helper to simplify view logic in a Keystone application
 *
 * @api public
 */
export declare class View {
    req: Request;
    res: Response;
    queryQueue: any[];
    initQueue: any[];
    renderQueue: any[];
    actionQueue: any[];
    constructor(req: Request, res: Response);
    on(on: any, func?: any, func2?: any): this;
    /**
     * Queues a mongoose query for execution before the view is rendered.
     * The results of the query are set in `locals[key]`.
     *
     * Keys can be nested paths, containing objects will be created as required.
     *
     * The third argument `then` can be a method to call after the query is completed
     * like function(err, results, callback), or a `populatedRelated` definition
     * (string or array).
     *
     * Examples:
     *
     * view.query('books', keystone.list('Book').model.find());
     *
     *     an array of books from the database will be added to locals.books. You can
     *     also nest properties on the locals variable.
     *
     * view.query(
     *     'admin.books',
     *      keystone.list('Book').model.find().where('user', 'Admin')
     * );
     *
     *     locals.admin.books will be the result of the query
     *     views.query().then is always called if it is available
     *
     * view.query('books', keystone.list('Book').model.find())
     *     .then(function (err, results, next) {
     *         if (err) return next(err);
     *         console.log(results);
     *         next();
     *     });
     *
     * @api public
     */
    query(key: any, query: any, options?: any): any;
    /**
     * Executes the current queue of init and action methods in series, and
     * then executes the render function. If renderFn is a string, it is provided
     * to `res.render`.
     *
     * It is expected that *most* init and action stacks require processing in
     * series.  If there are several init or action methods that should be run in
     * parallel, queue them as an array, e.g. `view.on('init', [first, second])`.
     *
     * @api public
     */
    render(renderFn: any, locals?: any, callback?: any): void;
}
