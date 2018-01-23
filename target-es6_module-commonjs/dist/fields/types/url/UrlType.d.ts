import { TextType } from '../text/TextType';
/**
 * URL FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class UrlType extends TextType {
    private schemaReady;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Formats the field value using either a supplied format function or default
     * which strips the leading protocol from the value for simpler display
     */
    format(item: any): any;
}
