"use strict";
/**
 * Exports an object of lists, keyed with their key instead of their name and
 * wrapped with the List helper (./List.js)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("./List");
exports.listsByKey = {};
exports.listsByPath = {};
for (const key in Keystone.lists) {
    // Guard for-ins
    if ({}.hasOwnProperty.call(Keystone.lists, key)) {
        const list = new List_1.List(Keystone.lists[key]);
        exports.listsByKey[key] = list;
        exports.listsByPath[list.path] = list;
    }
}
