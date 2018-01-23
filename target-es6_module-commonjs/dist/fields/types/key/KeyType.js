"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("../text/TextType");
const utils = require("keystone-utils");
/**
 * Key FieldType Constructor
 * @extends Field
 * @api public
 */
class KeyType extends TextType_1.TextType {
    constructor(list, path, options) {
        super(list, path, options);
    }
    init() {
        super.init();
        this._nativeType = String;
        this._defaultSize = 'medium';
        this.separator = this.options.separator || '-';
    }
    /**
     * Generates a valid key from a string
     */
    generateKey(str) {
        return utils.slug(String(str), this.separator);
    }
    /**
     * Checks that a valid key has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data, required, item) {
        let value = this.getValueFromData(data);
        if (value === undefined && item && item.get(this.path)) {
            return true;
        }
        value = this.generateKey(value);
        return (value || !required) ? true : false;
    }
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item, data, callback) {
        let value = this.getValueFromData(data);
        if (value === undefined) {
            return process.nextTick(callback);
        }
        value = this.generateKey(value);
        if (item.get(this.path) !== value) {
            item.set(this.path, value);
        }
        process.nextTick(callback);
    }
}
KeyType.properName = 'Key';
exports.KeyType = KeyType;
