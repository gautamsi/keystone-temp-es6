import * as assign from 'object-assign';
import { TextType } from '../text/TextType';
/**
 * Code FieldType Constructor
 * @extends Field
 * @api public
 */
export class CodeType extends TextType {
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
