/// <reference types="express" />
/// <reference types="express-serve-static-core" />
/// <reference types="mongoose" />
import * as express from 'express';
import { List } from './lib/list';
import { View } from './lib/view';
import * as mongoose from 'mongoose';
import { Content } from './lib/content';
import { Storage } from './lib/storage';
import { Email } from './lib/email';
import * as csrf from './lib/security/csrf';
import { FieldTypes } from './fields/types';
import { FieldBase } from './fields/types/FieldBase';
/**
 * Keystone Class
 */
export declare class Keystone {
    Field: {
        Types: typeof FieldTypes;
    };
    List: typeof List;
    utils: any;
    session: any;
    content: any;
    View: typeof View;
    sessionStorePromise: any;
    expressSession: express.RequestHandler;
    app: any;
    nav: any;
    lists: any;
    fieldTypes: any;
    _options: any;
    paths: any;
    _redirects: any;
    express: Express.Application;
    mongoose: mongoose.Mongoose;
    middleware: any;
    callHook: Function;
    constructor();
    prefixModel(key: any): any;
    closeDatabaseConnection(callback: any): this;
    createItems(data: any, ops: any, callback: any): void;
    createKeystoneHash(): string;
    createRouter(): any;
    /**
     * Retrieves orphaned lists (those not in a nav section)
     */
    getOrphanedLists(): string[];
    /**
     * Returns a function that looks in a specified path relative to the current
     * directory, and returns all .js modules in it (recursively).
     *
     * ####Example:
     *
     *     var importRoutes = keystone.importer(__dirname);
     *
     *     var routes = {
     *         site: importRoutes('./site'),
     *         api: importRoutes('./api')
     *     };
     *
     * @param {String} rel__dirname
     * @api public
     */
    importer(rel__dirname: any): (from: any) => {};
    /**
     * Initialises Keystone with the provided options
     */
    init(options: any): this;
    initDatabaseConfig(): this;
    initExpressApp(customApp?: any): this;
    initExpressSession(mongoose: any): this;
    initNav(sections?: any): any;
    /**
     * Retrieves a list
     */
    list(key: any): any;
    openDatabaseConnection(callback: any): this;
    /**
     * Populates relationships on a document or array of documents
     *
     * WARNING: This is currently highly inefficient and should only be used in development, or for
     * small data sets. There are lots of things that can be done to improve performance... later.
     *
     * @api public
     */
    populateRelated(docs: any, relationships: any, callback: any): this;
    /**
     * Adds one or more redirections (urls that are redirected when no matching
     * routes are found, before treating the request as a 404)
     *
     * #### Example:
     * 		keystone.redirect('/old-route', 'new-route');
     *
     * 		// or
     *
     * 		keystone.redirect({
     * 			'old-route': 'new-route'
     * 		});
     */
    redirect(): this;
    /**
     * Configures and starts a Keystone app in encapsulated mode.
     *
     * Connects to the database, runs updates and listens for incoming requests.
     *
     * Events are fired during initialisation to allow customisation, including:
     *
     *   - onMount
     *   - onStart
     *   - onHttpServerCreated
     *   - onHttpsServerCreated
     *
     * If the events argument is a function, it is assumed to be the started event.
     *
     * @api public
     */
    start(events?: any): this;
    /**
     * Wraps an error in simple HTML to be sent as a response to the browser
     *
     * @api public
     */
    wrapHTMLError(title: any, err: any): string;
    routes(): void;
    /**
     * Expands a path to include moduleRoot if it is relative
     */
    expandPath(pathValue: any): any;
    /**
     * Gets keystone options
     *
     * Example:
     *     keystone.get('test') // returns the 'test' value
     */
    get(key: any): any;
    /**
     * Gets an expanded path option, expanded to include moduleRoot if it is relative
     *
     * Example:
     *     keystone.get('pathOption', 'defaultValue')
     */
    getPath(key: any, defaultValue: any): any;
    /**
     * Sets multiple keystone options.
     *
     * Example:
     *     keystone.options({test: value}) // sets the 'test' option to `value`
     */
    options(options: any): any;
    /**
     * Sets keystone options
     *
     * Example:
     *     keystone.set('user model', 'User') // sets the 'user model' option to `User`
     */
    set(key: any, value?: any): Keystone;
    /**
     * returns all .js modules (recursively) in the path specified, relative
     * to the module root (where the keystone project is being consumed from).
     *
     * ####Example:
     *     var models = keystone.import('models');
     */
    import(dirname: any): {};
    /**
     * Applies Application updates
     */
    applyUpdates(callback: any): void;
    /**
     * Logs a configuration error to the console
     */
    console: {
        err: (type: any, msg: any) => void;
    };
    static instance: Keystone;
    static Admin: {
        Server: {
            createDynamicRouter: Function;
            createStaticRouter?: Function;
        };
    };
    static Email: typeof Email;
    static Field: typeof FieldBase;
    static List: typeof List;
    static Storage: typeof Storage;
    static View: typeof View;
    static content: Content;
    static security: {
        csrf: typeof csrf;
    };
    static utils: any;
    /**
     * Keystone version
     */
    static version: any;
    static session: any;
    pre: (...args) => any;
}
export declare const keystone: Keystone;
