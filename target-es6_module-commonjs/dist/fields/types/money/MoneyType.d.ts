import { NumberType } from '../number/NumberType';
/**
 * Money FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class MoneyType extends NumberType {
    _formatString: string;
    currency: string;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Formats the field value
     */
    format(item: any, format: any): any;
}
