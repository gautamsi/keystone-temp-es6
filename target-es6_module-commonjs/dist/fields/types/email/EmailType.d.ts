import { TextType } from '../text/TextType';
/**
 * Email FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class EmailType extends TextType {
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Generate a gravatar image request url
     */
    gravatarUrl(item: any, size: any, defaultImage: any, rating: any): string;
    /**
     * Asynchronously confirms that the provided email is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that a valid email has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): any;
    /**
     * Updates the value for this field in the item from a data object
     * Ensures that the email address is lowercase
     */
    updateItem(item: any, data: any, callback: any): void;
}
