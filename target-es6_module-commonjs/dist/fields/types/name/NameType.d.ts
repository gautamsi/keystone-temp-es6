import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Name FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class NameType extends FieldTypeBase {
    paths: any;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     *
     * Adds String properties for .first and .last name, and a virtual
     * with get() and set() methods for .full
     *
     * @api public
     */
    addToSchema(schema: any): void;
    /**
     * Gets the string to use for sorting by this field
     */
    getSortString(options: any): string;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): any;
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Get the value from a data object; may be simple or a pair of fields
     */
    getInputFromData(data: any): any;
    /**
     * Validates that a value for this field has been provided in a data object
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that input has been provided
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Detects whether the field has been modified
     *
     * @api public
     */
    isModified(item: any): any;
    /**
     * Updates the value for this field in the item from a data object
     *
     * @api public
     */
    updateItem(item: any, data: any, callback: any): void;
}
