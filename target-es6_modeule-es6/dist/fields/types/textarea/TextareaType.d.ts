import { TextType as TextType } from '../text/TextType';
/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class TextareaType extends TextType {
    multiline: boolean;
    height: number;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Formats the field value
     * @api public
     */
    format(item: any): any;
}
