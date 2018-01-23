import { TextType } from '../text/TextType';
/**
 * Color FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class ColorType extends TextType {
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
}
