import { FieldTypeBase } from '../FieldTypeBase';
import * as moment from 'moment';
/**
 * Date FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class DateType extends FieldTypeBase {
    timezoneUtcOffsetMinutes: number;
    isUTC: boolean;
    yearRange: number;
    formatString: string;
    parseFormatString: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * validates required inputs
     * @param item copied from TextType.validateRequiedInput
     * @param data
     * @param callback
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Formats the field value
     * ignore 3rd parameter onward, needed for DateArrayType to work properly.
     */
    format(item: any, format: any): any;
    /**
     * Returns a new `moment` object with the field value
     */
    moment(item: any): moment.Moment;
    /**
     * Parses input with the correct moment version (normal or utc) and uses
     * either the provided input format or the default for the field
     */
    parse(value: any, format?: any, strict?: any): moment.Moment;
    /**
     * Asynchronously confirms that the provided date is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     *
     * Retrives the date as a 'Javascript Date'.
     *
     * Note: If the JS date retrieved is UTC and has a time other than midnight,
     * it has likely become corrupted. In this instance, the below code will
     * attempt to add the server offset to it to fix the date.
     */
    getData(item: any): Date;
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
