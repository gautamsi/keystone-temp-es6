"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayFieldBase_1 = require("../ArrayFieldBase");
class NumberArrayField extends ArrayFieldBase_1.ArrayFieldBase {
    constructor() {
        super(...arguments);
        this.cleanInput = (input) => {
            return input.replace(/[^\d]/g, '');
        };
    }
}
NumberArrayField.displayName = 'NumberArrayField';
NumberArrayField.type = 'NumberArray';
exports.NumberArrayField = NumberArrayField;
