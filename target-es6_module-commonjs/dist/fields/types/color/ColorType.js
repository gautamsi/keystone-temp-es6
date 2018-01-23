"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("../text/TextType");
/**
 * Color FieldType Constructor
 * @extends Field
 * @api public
 */
class ColorType extends TextType_1.TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._nativeType = String;
    }
}
ColorType.properName = 'Color';
exports.ColorType = ColorType;
