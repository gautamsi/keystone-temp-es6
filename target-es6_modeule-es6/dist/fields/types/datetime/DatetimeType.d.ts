import { DateType } from '../date/DateType';
/**
 * DateTime FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class DatetimeType extends DateType {
    paths: {
        date: string;
        time: string;
        tzOffset: string;
    };
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Get the value from a data object; may be simple or a pair of fields
     */
    getInputFromData(data: any): any;
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates the input we get to be a valid date,
     * undefined, null or an empty string
     */
    validateInput(data: any, callback: any): void;
    /**
     * Checks that a valid date has been provided in a data object
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
