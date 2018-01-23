import { FieldTypeBase } from '../FieldTypeBase';
/**
 * File FieldType Constructor
 */
export declare class FileType extends FieldTypeBase {
    storageSchema(arg0: any): any;
    paths: {};
    storage: any;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     */
    addToSchema(schema: any): void;
    /**
     * Uploads a new file
     */
    upload(item: any, file: any, callback: any): void;
    /**
     * Resets the field value
     */
    reset(item: any): void;
    /**
     * Deletes the stored file and resets the field value
     */
    remove(item: any): void;
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Detects whether the field has been modified
     */
    isModified(item: any): boolean;
    /**
     * Validates that a value for this field has been provided in a data object
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that input has been provided
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Updates the value for this field in the item from a data object
     * TODO: It is not possible to remove an existing value and upload a new fiel
     * in the same action, this should be supported
     */
    updateItem(item: any, data: any, files: any, callback: any): void;
}
