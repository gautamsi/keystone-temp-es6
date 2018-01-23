import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Date FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class DateArrayType extends FieldTypeBase {
    formatString: string;
    parseFormatString: string;
    separator: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Formats the field value
     */
    format(item: any, format: any, separator: any): any;
    /**
     * Asynchronously confirms that the provided value is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     * Asynchronously confirms that the a value is present
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Add filters to a query
     *
     * @param {Object} filter 			   		The data from the frontend
     * @param {String} filter.mode  	   		The filter mode, either one of "on",
     *                                     		"after", "before" or "between"
     * @param {String} [filter.presence='some'] The presence mode, either on of
     *                                          "none" and "some". Default: 'some'
     * @param {String|Object} filter.value 		The value that is filtered for
     */
    addFilterToQuery(filter: any): any;
    /**
     * Checks that a valid array of dates has been provided in a data object
     * An empty value clears the stored value and is considered valid
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item: any, data: any, callback: any): void;
}
