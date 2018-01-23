/**
 * Page Class
 *
 * @param {String} key
 * @param {Object} options
 * @api public
 */
export declare class Page {
    fields: {};
    key: any;
    options: any;
    constructor(key: any, options: any);
    readonly name: any;
    /**
     * Sets page option
     *
     * ####Example:
     *
     *     page.set('test', value) // sets the 'test' option to `value`
     *
     * @param {String} key
     * @param {String} value
     * @return value
     * @api public
     */
    set(key: any, value: any): any;
    /**
     * Gets page option
     *
     * ####Example:
     *
     *     page.get('test') // returns the value of 'test' key
     *
     * @param {String} key
     * @return any
     * @method get
     * @api public
     */
    get(key: any): any;
    /**
     * Adds one or more fields to the page
     *
     * @api public
     */
    add(fields: any): this;
    /**
     * Registers the page with Keystone.
     *
     * ####Example:
     *
     * 		var homePage = new keystone.content.Page('home');
     * 		// ...
     * 		homePage.register();
     *
     * 		// later...
     * 		var homePage = keystone.content.page('home');
     *
     * @api public
     */
    register(): any;
    /**
     * Populates a data structure based on defined fields
     *
     * @api public
     */
    populate(data: any): any;
    /**
     * Validates a data structure based on defined fields
     *
     * @api public
     */
    validate(data: any): any;
    /**
     * Cleans a data structure so only the defined fields are present
     *
     * @api public
     */
    clean(data: any): any;
}
