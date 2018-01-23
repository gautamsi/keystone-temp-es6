/**
 * Returns an array of expanded filter objects,
 * given (a string representation | an array of filters) and a currentList object.
 *
 * @param { String|Array } Either a string representation of an array of filter objects, or an array of filter objects.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Array } of { Objects } as an expanded representation of the filters passed in.
 **/
export declare function filtersParser(filters: any, currentList: any): any;
/**
 * Returns an array of expanded filter objects,
 * given (a string representation | an array of filters) and a currentList object.
 *
 * @param { Object } Filter object  containing the following key value pairs {path} and {value}.
 * @param { Array } of { Objects } an array of the currently active filters.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Object } an expanded representation of the passed in filter { Object }.
 **/
export declare function filterParser({path, value}: {
    path: any;
    value: any;
}, activeFilters: any, currentList: any): any;
/**
 * Returns a filter object
 * given a path, a value, and the fields within an instance of the List prototype.
 *
 * @param { String } filter path
 * @param { Object } of filter values.
 * @param { Object } of fields from the current instance of the List prototype.
 * @return { Object } a filter comprised of the:filters.js
 *	- corresponding field value within the current List,
 *	- and the passed in value { Object }.
 **/
export declare function createFilterObject(path: any, value: any, currentListFields: any): {
    field: any;
    value: any;
};
