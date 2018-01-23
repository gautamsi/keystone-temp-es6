/**
 * The main list helper class
 *
 * @param {Object} options
 */
export declare class List {
    defaultColumns: any;
    hidden: any;
    key: any;
    path: string;
    fields: any;
    namePath: any;
    sortable: any;
    defaultSort: any;
    defaultColumnPaths: any;
    expandedDefaultColumns: any;
    columns: any;
    constructor(options: any);
    /**
     * Create an item via the API
     *
     * @param  {FormData} formData The submitted form data
     * @param  {Function} callback Called after the API call
     */
    createItem(formData: any, callback: any): void;
    /**
     * Update a specific item
     *
     * @param  {String}   id       The id of the item we want to update
     * @param  {FormData} formData The submitted form data
     * @param  {Function} callback Called after the API call
     */
    updateItem(id: any, formData: any, callback: any): void;
    expandColumns(input: any): any;
    expandSort(input: any): {
        rawInput: any;
        isDefaultSort: boolean;
        input: any;
        paths: any;
    };
    /**
     * Load a specific item via the API
     *
     * @param  {String}   itemId   The id of the item we want to load
     * @param  {Object}   options
     * @param  {Function} callback
     */
    loadItem(itemId: any, options: any, callback: any): void;
    /**
     * Load all items of a list, optionally passing objects to build a query string
     * for sorting or searching
     *
     * @param  {Object}   options
     * @param  {Function} callback
     */
    loadItems(options: any, callback: any): void;
    /**
     * Constructs a download URL to download a list with the current sorting, filtering,
     * selection and searching options
     *
     * @param  {Object} options
     *
     * @return {String}         The download URL
     */
    getDownloadURL(options: any): string;
    /**
     * Delete a specific item via the API
     *
     * @param  {String}   itemId   The id of the item we want to delete
     * @param  {Function} callback
     */
    deleteItem(itemId: any, callback: any): void;
    /**
     * Delete multiple items at once via the API
     *
     * @param  {Array}   itemIds  An array of ids of items we want to delete
     * @param  {Function} callback
     */
    deleteItems(itemIds: any, callback: any): void;
    reorderItems(item: any, oldSortOrder: any, newSortOrder: any, pageOptions: any, callback: any): void;
}
