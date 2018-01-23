import { TextType } from '../text/TextType';
/**
 * Color FieldType Constructor
 * @extends Field
 * @api public
 */
export class ColorType extends TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._nativeType = String;
    }
}
ColorType.properName = 'Color';
