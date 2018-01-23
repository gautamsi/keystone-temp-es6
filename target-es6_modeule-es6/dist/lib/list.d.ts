/// <reference types="mongoose" />
import { Keystone } from '../../src/keystone';
import { Schema } from 'mongoose';
export declare class List<T> {
    tracking: any;
    pagination: {
        maxPages: number;
    };
    sortable: any;
    autokey: any;
    static keystone: Keystone;
    _initialFields: any;
    model: any;
    fieldTypes: {
        wysiwyg?: any;
    };
    relationshipFields: any[];
    relationships: {};
    mappings: {
        name: any;
        createdBy: any;
        createdOn: any;
        modifiedBy: any;
        modifiedOn: any;
    };
    fieldsArray: any[];
    fields: {};
    underscoreMethods: {};
    uiElements: any[];
    schemaFields: any[];
    schema: Schema;
    path: any;
    key: any;
    options: any;
    _defaultColumns: any;
    _searchFields: any;
    readonly label: any;
    readonly singular: any;
    readonly plural: any;
    readonly namePath: any;
    readonly nameField: any;
    readonly nameIsVirtual: any;
    readonly nameFieldIsFormHeader: any;
    readonly nameIsInitial: any;
    readonly initialFields: any;
    searchFields: any;
    defaultSort: any;
    defaultColumns: any;
    constructor(key: any, options: any);
    static init(keystone: Keystone): typeof List;
    /**
     * Adds one or more fields to the List
     * Based on Mongoose's Schema.add
     */
    add(...listargs: any[]): List<T>;
    addFiltersToQuery(filters: any): {};
    addSearchToQuery(searchString: any): any;
    /**
     * # List.apiForGet(options)
     *
     * Returns JSON API middleware for a GET /:id endpoint
     *
     * Supports the following options:
     *
     * ### `id` (string)
     *
     * Optional; Defaults to `"id"`
     *
     * The name of the express url param that contains the ID to get.
     *
     * ### `query` `function(query, req, res)`
     *
     * Optional
     *
     * A function that modifies the query to find the item. You can
     * use this to check anything about the request (e.g. permissions), and/or modify
     * the conditions on the mongoose query.
     *
     * You can handle the response from within this function; return `false` to stop
     * the API middleware from continuing.
     *
     * ### `query` `object`
     *
     * Optional
     *
     * An object of additional `where` conditions to add to the `query`
     *
     * ### `transform` `function(item, req, res)`
     *
     * A function that transforms the object before it is sent as JSON.
     */
    apiForGet(options: any): (req: any, res: any) => void;
    /**
     * Checks to see if a field path matches a currently unmapped path, and
     * if so, adds a mapping for it.
     */
    automap(field: any): this;
    /**
     * Returns either false if the list has no search fields defined or a structure
     * describing the text index that should exist.
     */
    buildSearchTextIndex(): {};
    /**
     * Look for a text index defined in the current list schema; returns boolean
     * Note this doesn't check for text indexes that exist in the DB
     */
    declaresTextIndex(): boolean;
    /**
     * Does what it can to ensure the collection has an appropriate text index.
     *
     * Works around unreliable behaviour with the Mongo drivers ensureIndex()
     * Specifically, when the following are true..
     *   - Relying on collection.ensureIndexes() to create text indexes
     *   - A text index already exists on the collection
     *   - The existing index has a different definition but the same name
     * The index is not created/updated and no error is returned, either by the
     * ensureIndexes() call or the connection error listener.
     * Or at least that's what was happening for me (mongoose v3.8.40, mongodb v1.4.38)..
     */
    ensureTextIndex(callback: any): void;
    /**
     * Expands a comma-separated string or array of columns into valid column objects.
     *
     * Columns can be:
     *    - A Field, in the format "field|width"
     *    - A Field in a single related List, in the format "list:field|width"
     *    - Any valid path in the Schema, in the format "path|width"
     *
     * The width part is optional, and can be in the format "n%" or "npx".
     *
     * The path __name__ is automatically mapped to the namePath of the List.
     *
     * The field or path for the name of the item (defaults to ID if not set or detected)
     * is automatically prepended if not explicitly included.
     */
    expandColumns(cols: any): any[];
    expandPaths(paths: any): any;
    expandSort(input: any): any;
    /**
     * Creates a new field at the specified path, with the provided options.
     * If no options are provides, returns the field at the specified path.
     */
    field(path: any, options: any): any;
    get(key: any): any;
    /**
     * Gets the Admin URL to view the list (or an item if provided)
     *
     * Example:
     *     var listURL = list.getAdminURL()
     *     var itemURL = list.getAdminURL(item)
     *
     * @param {Object} item
     */
    getAdminURL(item: any): string;
    /**
     * Gets the data from an Item ready to be serialised to CSV for download
     */
    getCSVData(item: any, options: any): {};
    /**
     * Gets the data from an Item ready to be serialised for client-side use, as
     * used by the React components and the Admin API
     */
    getData(item: any, fields: any, expandRelationshipFields: any): any;
    /**
     * Gets the name of the provided document from the correct path
     *
     * Example:
     *     var name = list.getDocumentName(item)
     *
     * @param {Object} item
     * @param {Boolean} escape - causes HTML entities to be encoded
     */
    getDocumentName(doc: any, escape?: any): any;
    /**
     * Gets the options for the List, as used by the React components
     */
    getOptions(): {
        autocreate: any;
        autokey: any;
        defaultColumns: any;
        defaultSort: any;
        fields: {};
        hidden: any;
        initialFields: {}[];
        key: any;
        label: any;
        nameField: any;
        nameFieldIsFormHeader: any;
        nameIsInitial: any;
        nameIsVirtual: any;
        namePath: any;
        nocreate: any;
        nodelete: any;
        noedit: any;
        path: any;
        perPage: any;
        plural: any;
        searchFields: any;
        singular: any;
        sortable: any;
        sortContext: any;
        track: any;
        tracking: any;
        relationships: {};
        uiElements: any[];
    };
    /**
     * Generate page array for pagination
     *
     * @param {Number} the maximum number pages to display in the pagination
     * @param {Object} page options
     */
    getPages(options: any, maxPages: any): void;
    /**
     * Gets filters for a Mongoose query that will search for the provided string,
     * based on the searchFields List option.
     *
     * Also accepts a filters object from `processFilters()`, any of which may
     * override the search string.
     *
     * NOTE: This function is deprecated in favor of List.prototype.addSearchToQuery
     * and will be removed in a later version.
     *
     * Example:
     *     list.getSearchFilters('jed') // returns { name: /jed/i }
     *
     * @param {String} query
     * @param {Object} additional filters
     */
    getSearchFilters(search: any, add: any): any;
    /**
     * Gets a unique value from a generator method by checking for documents with the same value.
     *
     * To avoid infinite loops when a unique value cannot be found, it will bail and pass back an
     * undefined value after 10 attemptes.
     *
     * WARNING: Because there will always be a small amount of time between checking for an
     * existing value and saving a document, race conditions can occur and it is possible that
     * another document has the 'unique' value assigned at the same time.
     *
     * Because of this, if true uniqueness is required, you should also create a unique index on
     * the database path, and handle duplicate errors thrown on save.
     *
     * @param {String} path to check for uniqueness
     * @param {Function} generator method to call to generate a new value
     * @param {Number} the maximum number of attempts (optional, defaults to 10)
     * @param {Function} callback(err, uniqueValue)
     */
    getUniqueValue(path: any, generator: any, limit: any, callback: any): void;
    /**
     * Check whether or not a `path` is a reserved path. This restricts the use
     * of `Object.prototype` method keys as well as internal mongo paths.
     */
    isReserved(path: any): boolean;
    /**
     * Maps a built-in field (e.g. name) to a specific path
     */
    map(field: any, path: any): any;
    /**
     * Gets a special Query object that will paginate documents in the list
     *
     * Example:
     *     list.paginate({
     *         page: 1,
     *         perPage: 100,
     *         maxPages: 10
     *     }).exec(function(err, results) {
     *         // do something
     *     });
     *
     * @param {Object} options
     * @param {Function} callback (optional)
     */
    paginate(options: any, callback: any): any;
    /**
     * Processes a filter string into a filters object
     *
     * NOTE: This function is deprecated in favor of List.prototype.addFiltersToQuery
     * and will be removed in a later version.
     *
     * @param {String} filters
     */
    processFilters(q: any): {};
    /**
     * Registers the Schema with Mongoose, and the List with Keystone
     *
     * Also adds default fields and virtuals to the schema for the list
     */
    register(): this;
    /**
     * Registers relationships to this list defined on others
     */
    relationship(def: any): this;
    /**
     * Specified select and populate options for a query based the provided columns.
     *
     * @param {Query} query
     * @param {Array} columns
     */
    selectColumns(q: any, cols: any): void;
    /**
     * Gets and Sets list options. Aliased as .get()
     *
     * Example:
     *     list.set('test') // returns the 'test' value
     *     list.set('test', value) // sets the 'test' option to `value`
     */
    set(key: any, value?: any): any;
    /**
     * Adds a method to the underscoreMethods collection on the list, which is then
     * added to the schema before the list is registered with mongoose.
     */
    underscoreMethod(path: any, fn: any): this;
    updateItem(item: any, data: any, options: any, callback: any): any;
}
