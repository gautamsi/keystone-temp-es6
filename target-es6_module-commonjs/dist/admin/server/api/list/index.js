"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const download_1 = require("./download");
const get_1 = require("./get");
const update_1 = require("./update");
exports.listHandler = {
    create: create_1.create,
    delete: delete_1.delete_,
    download: download_1.download,
    get: get_1.get,
    update: update_1.update
};
