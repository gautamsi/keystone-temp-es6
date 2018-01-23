"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("../text/TextType");
/**
 * HTML FieldType Constructor
 * @extends Field
 * @api public
 */
class HtmlType extends TextType_1.TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._nativeType = String;
        this._defaultSize = 'full';
        this.wysiwyg = this.options.wysiwyg || false;
        this.height = this.options.height || 180;
        this._properties = ['wysiwyg', 'height'];
    }
}
HtmlType.properName = 'Html';
exports.HtmlType = HtmlType;
