"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign = require("object-assign");
const TextType_1 = require("../text/TextType");
/**
 * Code FieldType Constructor
 * @extends Field
 * @api public
 */
class CodeType extends TextType_1.TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._nativeType = String;
        this._defaultSize = 'full';
        this.height = this.options.height || 180;
        this.lang = this.options.lang || this.options.language;
        this._properties = ['editor', 'height', 'lang'];
        this.codemirror = this.options.codemirror || {};
        this.editor = assign({ mode: this.lang }, this.codemirror);
    }
}
CodeType.properName = 'Code';
exports.CodeType = CodeType;
