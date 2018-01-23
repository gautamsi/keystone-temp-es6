import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Embedly FieldType Constructor
 *
 * Reqires the option `from` to refer to another path in the schema
 * that provides the url to expand
 *
 * @extends Field
 * @api public
 */
export declare class EmbedlyType extends FieldTypeBase {
    paths: any;
    fromPath: any;
    embedlyOptions: any;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     *
     * @api public
     */
    addToSchema(schema: any): void;
    /**
     * Resets the value of the field
     *
     * @api public
     */
    reset(item: any): any;
    /**
     * Formats the field value
     *
     * @api public
     */
    format(item: any): any;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    /**
     * Detects whether the field has been modified
     *
     * @api public
     */
    isModified(item: any): any;
    /**
     * Field has no input and is always valid
     *
     * Deprecated
     */
    inputIsValid(): boolean;
    /**
     * Updates the value for this field in the item from a data object
     *
     * @api public
     */
    updateItem(item: any, data: any, callback: any): void;
}
