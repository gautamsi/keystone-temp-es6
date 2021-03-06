"use strict";
/**
 * Returns an Express Router with bindings for the Admin UI static resources,
 * i.e files, less and browserified scripts.
 *
 * Should be included before other middleware (e.g. session management,
 * logging, etc) for reduced overhead.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const browserify_1 = require("../middleware/browserify");
const express = require("express");
const less = require("less-middleware");
const path = require("path");
const str = require("string-to-stream");
function buildFieldTypesStream(fieldTypes) {
    let src = '';
    const types = Object.keys(fieldTypes);
    ['Column', 'Field', 'Filter'].forEach(function (i) {
        src += 'export const ' + i + 's = {\n';
        types.forEach(function (type) {
            if (typeof fieldTypes[type] !== 'string')
                return;
            src += type.replace('Type', '') + ': require("../../fields/types/' + type.replace('Type', '') + '/' + fieldTypes[type] + i + '").' + fieldTypes[type] + i + ',\n';
        });
        // Append ID and Unrecognised column types
        if (i === 'Column') {
            src += 'id: require("../../fields/components/columns/IdColumn").IdColumn,\n';
            src += '__unrecognised__: require("../../fields/components/columns/InvalidColumn").InvalidColumn,\n';
        }
        src += '};\n';
    });
    return str(src);
}
function createStaticRouter(keystone) {
    const keystoneHash = keystone.createKeystoneHash();
    const writeToDisk = keystone.get('cache admin bundles');
    const router = express.Router();
    /* Prepare browserify bundles */
    const bundles = {
        fields: browserify_1.browserifyMiddleware({
            stream: buildFieldTypesStream(keystone.fieldTypes),
            expose: 'FieldTypes',
            file: './FieldTypes.js',
            hash: keystoneHash,
            writeToDisk: writeToDisk,
        }),
        signin: browserify_1.browserifyMiddleware({
            file: './Signin/index.js',
            hash: keystoneHash,
            writeToDisk: writeToDisk,
        }),
        admin: browserify_1.browserifyMiddleware({
            file: './App/index.js',
            hash: keystoneHash,
            writeToDisk: writeToDisk,
        }),
    };
    // prebuild static resources on the next tick in keystone dev mode; this
    // improves first-request performance but delays server start
    if (process.env.KEYSTONE_DEV === 'true' || process.env.KEYSTONE_PREBUILD_ADMIN === 'true') {
        bundles.fields.build();
        bundles.signin.build();
        bundles.admin.build();
    }
    /* Prepare LESS options */
    const elementalPath = path.join(path.dirname(require.resolve('elemental')), '..');
    const reactSelectPath = path.join(path.dirname(require.resolve('react-select')), '..');
    const customStylesPath = keystone.getPath('adminui custom styles') || '';
    const lessOptions = {
        render: {
            modifyVars: {
                elementalPath: JSON.stringify(elementalPath),
                reactSelectPath: JSON.stringify(reactSelectPath),
                customStylesPath: JSON.stringify(customStylesPath),
                adminPath: JSON.stringify(keystone.get('admin path')),
            },
        },
    };
    /* Configure router */
    router.use('/styles', less(path.resolve(__dirname + '/../../public/styles'), lessOptions));
    router.use('/styles/fonts', express.static(path.resolve(__dirname + '/../../public/js/lib/tinymce/skins/keystone/fonts')));
    router.get('/js/fields.js', bundles.fields.serve);
    router.get('/js/signin.js', bundles.signin.serve);
    router.get('/js/admin.js', bundles.admin.serve);
    router.use(express.static(path.resolve(__dirname + '/../../public')));
    return router;
}
exports.createStaticRouter = createStaticRouter;
