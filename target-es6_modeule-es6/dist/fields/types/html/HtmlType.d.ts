import { TextType } from '../text/TextType';
/**
 * HTML FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class HtmlType extends TextType {
    height: number;
    wysiwyg: boolean;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
}
