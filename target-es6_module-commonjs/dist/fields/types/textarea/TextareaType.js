"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("../text/TextType");
const utils = require("keystone-utils");
/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
class TextareaType extends TextType_1.TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._underscoreMethods = ['format', 'crop'];
        this.height = this.options.height || 90;
        this.multiline = true;
        this._properties = ['height', 'multiline'];
    }
    /**
     * Formats the field value
     * @api public
     */
    format(item) {
        return utils.textToHTML(item.get(this.path));
    }
}
TextareaType.properName = 'Textarea';
exports.TextareaType = TextareaType;
