import { TextType } from '../text/TextType';
/**
 * Code FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class CodeType extends TextType {
    editor: any;
    codemirror: any;
    lang: string;
    height: number;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
}
