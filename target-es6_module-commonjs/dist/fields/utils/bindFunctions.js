"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Tidier binding for component methods to Classes
    ===============================================

    constructor() {
        super();
        bindFunctions.call(this, ['handleClick', 'handleOther']);
    }
*/
function bindFunctions(functions) {
    functions.forEach(f => (this[f] = this[f].bind(this)));
}
exports.bindFunctions = bindFunctions;
