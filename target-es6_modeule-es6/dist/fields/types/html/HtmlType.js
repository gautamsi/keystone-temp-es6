import { TextType } from '../text/TextType';
/**
 * HTML FieldType Constructor
 * @extends Field
 * @api public
 */
export class HtmlType extends TextType {
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
