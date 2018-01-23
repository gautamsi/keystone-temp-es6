import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class TextType extends FieldTypeBase {
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    validateInput(data: any, callback: any): void;
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Crops the string to the specifed length.
     */
    crop(item: any, length: any, append: any, preserveWords: any): any;
}
