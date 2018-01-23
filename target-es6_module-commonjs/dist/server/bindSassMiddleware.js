"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _debug = require("debug");
const debug = _debug('keystone:core:bindSassMiddleware');
const _ = require("lodash");
const safeRequire_1 = require("../lib/safeRequire");
function bindSassMiddleware(keystone, app) {
    // the sass option can be a single path, or array of paths
    // when set, we configure the node-sass middleware
    let sassPaths = keystone.get('sass');
    const sassOptions = keystone.get('sass options') || {};
    if (typeof sassPaths === 'string') {
        sassPaths = [sassPaths];
    }
    if (Array.isArray(sassPaths)) {
        debug('adding sass');
        const sassMiddleware = safeRequire_1.safeRequire('node-sass-middleware', 'sass');
        const outputStyle = keystone.get('env') === 'production' ? 'compressed' : 'nested';
        sassPaths.forEach(function (path) {
            app.use(sassMiddleware(_.extend({
                src: keystone.expandPath(path),
                dest: keystone.expandPath(path),
                outputStyle: outputStyle,
            }, sassOptions)));
        });
    }
}
exports.bindSassMiddleware = bindSassMiddleware;
