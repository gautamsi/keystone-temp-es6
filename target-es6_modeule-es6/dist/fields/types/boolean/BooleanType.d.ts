import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Boolean FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class BooleanType extends FieldTypeBase {
    indent: boolean;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    defaults: {
        default: boolean;
    };
    validateInput(data: any, callback: any): void;
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Validates that a truthy value for this field has been provided in a data object.
     * Useful for checkboxes that are required to be true (e.g. agreed to terms and cond's)
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any): boolean;
    /**
     * Updates the value for this field in the item from a data object.
     * Only updates the value if it has changed.
     * Treats a falsy value or the string "false" as false, everything else as true.
     */
    updateItem(item: any, data: any, callback: any): void;
}
