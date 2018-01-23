import { FieldTypeBase } from '../FieldTypeBase';
/**
 * CloudinaryImages FieldType Constructor
 */
export declare class CloudinaryImagesType extends FieldTypeBase {
    paths: {
        folder: string;
        upload: string;
        uploads: string;
        action: string;
    };
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Gets the folder for images in this field
     */
    getFolder(): any;
    /**
     * Registers the field on the List's Mongoose Schema.
     */
    addToSchema(schema: any): void;
    removeImage(item: any, id: any, method: any, callback: any): void;
    /**
     * Formats the field value
     */
    format(item: any): string;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any[];
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any): boolean;
    getOptions(): any;
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item: any, data: any, files: any, callback: any): void;
}
