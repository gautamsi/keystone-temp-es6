import { FieldTypeBase } from '../FieldTypeBase';
/**
 * TextArray FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class TextArrayType extends FieldTypeBase {
    separator: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Formats the field value
     */
    format(item: any, separator: any): any;
    /**
     * Add filters to a query
     *
     * @param {Object} filter 			   		The data from the frontend
     * @param {String} filter.mode  	   		The filter mode, either one of
     *                                     		"beginsWith", "endsWith", "exactly"
     *                                     		or "contains"
     * @param {String} [filter.presence='some'] The presence mode, either on of
     *                                          "none" and "some". Default: 'some'
     * @param {String|Object} filter.value 		The value that is filtered for
     */
    addFilterToQuery(filter: any): {};
    /**
     * Asynchronously confirms that the provided value is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     * Asynchronously confirms that the a value is present
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object.
     * If the data object does not contain the value, then the value is set to empty array.
     */
    updateItem(item: any, data: any, callback: any): void;
}
