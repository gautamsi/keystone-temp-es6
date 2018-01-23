"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const bodyParser = require("body-parser");
function bindBodyParser(keystone, app) {
    // Set up body options and cookie parser
    const bodyParserParams = {};
    if (keystone.get('file limit')) {
        bodyParserParams.limit = keystone.get('file limit');
    }
    app.use(bodyParser.json(bodyParserParams));
    bodyParserParams.extended = true;
    app.use(bodyParser.urlencoded(bodyParserParams));
    app.use(multer({
        includeEmptyFields: true,
    }));
}
exports.bindBodyParser = bindBodyParser;
