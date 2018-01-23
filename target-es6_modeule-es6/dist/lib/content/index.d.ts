/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
import { Keystone } from '../../../src/keystone';
/**
 * Content Class
 *
 * Accessed via `Keystone.content`
 *
 * @api public
 */
export declare class Content {
    pages: any;
    AppContent: mongoose.Model<any>;
    static keystone: Keystone;
    /**
     * Loads page content by page key (optional).
     *
     * If page key is not provided, returns a hash of all page contents in the database.
     *
     * ####Example:
     *
     *     keystone.content.fetch('home', function(err, content) { ... });
     *
     * @param {String} key (optional)
     * @param {Function} callback
     * @api public
     */
    fetch(page: any, callback: any): any;
    /**
     * Sets page content by page key.
     *
     * Merges content with existing content.
     *
     * ####Example:
     *
     *     keystone.content.store('home', { title: 'Welcome' }, function(err) { ... });
     *
     * @param {String} key
     * @param {Object} content
     * @param {Function} callback
     * @api public
     */
    store(page: any, content: any, callback: any): any;
    /**
     * Registers a page. Should not be called directly, use Page.register() instead.
     *
     * @param {Page} page
     * @api private
     */
    page(key: any, page: any): any;
    /**
     * Ensures the Mongoose model for storing content is initialised.
     *
     * Called automatically when pages are added.
     *
     * @api private
     */
    initModel(): void;
    /**
     * Outputs client-side editable data for content management
     *
     * Called automatically when pages are added.
     *
     * @api private
     */
    editable(user: any, options: any): string;
    static init(keystone: Keystone): Content;
}
export { Page } from './page';
export { Html, Text } from './types';
