import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Number FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class NumberType extends FieldTypeBase {
    formatString: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    validateInput(data: any, callback: any): void;
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): any;
    /**
     * Formats the field value
     */
    format(item: any, format: any): any;
    /**
     * Checks that a valid number has been provided in a data object
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
