"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortable_1 = require("./schemaPlugins/sortable");
exports.sortable = sortable_1.sortable;
var autokey_1 = require("./schemaPlugins/autokey");
exports.autokey = autokey_1.autokey;
var track_1 = require("./schemaPlugins/track");
exports.track = track_1.track;
var history_1 = require("./schemaPlugins/history");
exports.history = history_1.history;
const getRelated_1 = require("./schemaPlugins/methods/getRelated");
const populateRelated_1 = require("./schemaPlugins/methods/populateRelated");
const transform_1 = require("./schemaPlugins/options/transform");
exports.methods = {
    getRelated: getRelated_1.getRelated,
    populateRelated: populateRelated_1.populateRelated
};
exports.options = {
    transform: transform_1.transform
};
