"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function transform(doc, ret) {
    if (doc._populatedRelationships) {
        _.forEach(doc._populatedRelationships, function (on, key) {
            if (!on)
                return;
            ret[key] = doc[key];
        });
    }
}
exports.transform = transform;
