import { FieldTypeBase } from '../FieldTypeBase';
/**
 * CloudinaryImage FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class CloudinaryImageType extends FieldTypeBase {
    paths: {
        public_id: string;
        version: string;
        signature: string;
        format: string;
        resource_type: string;
        url: string;
        width: string;
        height: string;
        secure_url: string;
        exists: string;
        folder: string;
        select: string;
    };
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Gets the folder for images in this field
     */
    getFolder(): any;
    private exists(item);
    private src(cloudinary, item, options);
    private reset(item);
    private addSize(options, width, height, other);
    /**
     * Registers the field on the List's Mongoose Schema.
     */
    addToSchema(schema: any): void;
    private applySchemaMethod(item, method, ...rest);
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    getOptions(): any;
    /**
     * Detects whether the field has been modified
     */
    isModified(item: any): any;
    /**
     * Validates that a value for this field has been provided in a data object
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that input has been provided
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Always assumes the input is valid
     *
     * Deprecated
     */
    inputIsValid(): boolean;
    /**
     * Updates the value for this field in the item from a data object
     * TODO: It is not possible to remove an existing value and upload a new image
     * in the same action, this should be supported
     */
    updateItem(item: any, data: any, files: any, callback: any): void;
    /**
        Generates a filename with the provided method in a retry loop, used by
        getFilename below
    */
    retryFilename(...args: any[]): any;
    /**
        Gets a filename for uploaded files based on the adapter options
    */
    getFilename(...args: any[]): any;
    fileExists(filename: any, callback: any): void;
    /**
     * Returns a callback that handles a standard form submission for the field
     *
     * Expected form parts are
     * - `field.paths.action` in `req.body` (`clear` or `delete`)
     * - `field.paths.upload` in `req.files` (uploads the image to cloudinary)
     *
     * @api public
     */
    getRequestHandler(item: any, req: any, paths: any, callback: any): () => void;
}
