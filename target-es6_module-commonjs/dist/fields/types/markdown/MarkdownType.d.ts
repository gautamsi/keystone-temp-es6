import { TextType } from '../text/TextType';
/**
 * Markdown FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class MarkdownType extends TextType {
    paths: any;
    wysiwyg: boolean;
    height: number;
    sanitizeOptions: any;
    markedOptions: any;
    toolbarOptions: any;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     *
     * Adds String properties for .md and .html markdown, and a setter for .md
     * that generates html when it is updated.
     */
    addToSchema(schema: any): void;
    /**
     * Add filters to a query (this is copy & pasted from the text field, with
     * the only difference being that the path isn't this.path but this.paths.md)
     */
    addFilterToQuery(filter: any): {};
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Detects whether the field has been modified
     */
    isModified(item: any): any;
    /**
     * Updates the value for this field in the item from a data object
     *
     * Will accept either the field path, or paths.md
     */
    updateItem(item: any, data: any, callback: any): void;
}
