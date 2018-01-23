"use strict";
/*!
 * Module dependencies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../type");
/**
 * Text ContentType Constructor
 * @extends Field
 * @api public
 */
class Text extends type_1.Type {
    constructor(path, options) {
        super(path, options);
    }
}
exports.Text = Text;
