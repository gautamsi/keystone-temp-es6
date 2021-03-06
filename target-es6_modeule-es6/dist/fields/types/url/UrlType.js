import { TextType } from '../text/TextType';
// TODO: is it worth adding URL specific validation logic? it would have to be
// robust so as to not trigger invalid cases on valid input, might be so
// flexible that it's not worth adding.
/**
 * URL FieldType Constructor
 * @extends Field
 * @api public
 */
export class UrlType extends TextType {
    constructor(list, path, options) {
        super(list, path, options);
        this.schemaReady = false;
    }
    init() {
        super.init();
        this._nativeType = String;
        this._underscoreMethods = ['format'];
    }
    /**
     * Formats the field value using either a supplied format function or default
     * which strips the leading protocol from the value for simpler display
     */
    format(item) {
        const url = item.get(this.path) || '';
        if (this.options.format === false) {
            return url;
        }
        else if (typeof this.options.format === 'function') {
            return this.options.format(url);
        }
        else {
            return removeProtocolPrefix(url);
        }
    }
}
UrlType.properName = 'Url';
/**
 * Remove the protocol prefix from url
 */
function removeProtocolPrefix(url) {
    return url.replace(/^[a-zA-Z]+\:\/\//, '');
}
