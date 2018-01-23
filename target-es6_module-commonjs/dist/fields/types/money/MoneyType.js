"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberType_1 = require("../number/NumberType");
const numeral = require("numeral");
/**
 * Money FieldType Constructor
 * @extends Field
 * @api public
 */
class MoneyType extends NumberType_1.NumberType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this.currency = this.options.currency;
        this._nativeType = Number;
        this._underscoreMethods = ['format'];
        this._properties = ['currency'];
        this._fixedSize = 'small';
        this._formatString = (this.options.format === false) ? false : (this.options.format || '$0,0.00');
        if (this._formatString && typeof this._formatString !== 'string') {
            throw new Error('FieldType.Money: options.format must be a string.');
        }
    }
    /**
     * Formats the field value
     */
    format(item, format) {
        if (this.currency) {
            try {
                numeral.language(this.currency, require('numeral/languages/' + this.currency));
                numeral.language(this.currency);
            }
            catch (err) {
                throw new Error('FieldType.Money: options.currency failed to load.');
            }
        }
        if (format || this._formatString) {
            return (typeof item.get(this.path) === 'number') ? numeral(item.get(this.path)).format(format || this._formatString) : '';
        }
        else {
            return item.get(this.path) || '';
        }
    }
}
MoneyType.properName = 'Money';
exports.MoneyType = MoneyType;
