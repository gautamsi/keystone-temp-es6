"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestLanguage = require("express-request-language");
function language(keystone) {
    const languageOptions = Object.assign({
        'supported languages': ['en-US'],
        'language cookie': 'language',
        'language cookie options': {},
        'language select url': '/languages/{language}',
    }, keystone.get('language options'));
    return requestLanguage({
        languages: languageOptions['supported languages'],
        cookie: {
            name: languageOptions['language cookie'],
            url: languageOptions['language select url'],
        },
        queryName: languageOptions['language query name'],
    });
}
exports.language = language;
