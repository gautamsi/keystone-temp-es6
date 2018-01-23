import { TextType } from '../text/TextType';
/**
 * Key FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class KeyType extends TextType {
    separator: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Generates a valid key from a string
     */
    generateKey(str: any): any;
    /**
     * Checks that a valid key has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item: any, data: any, callback: any): void;
}
