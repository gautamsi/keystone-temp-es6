"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("../../../lib/session");
const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");
const createHealthchecksHandler_1 = require("./createHealthchecksHandler");
const index_1 = require("../routes/index");
const signin_1 = require("../routes/signin");
const signout_1 = require("../routes/signout");
const apiError_1 = require("../middleware/apiError");
const logError_1 = require("../middleware/logError");
const initList_1 = require("../middleware/initList");
const session_2 = require("../api/session");
const list_1 = require("../api/list");
const item_1 = require("../api/item");
const cloudinary_1 = require("../api/cloudinary");
const s3_1 = require("../api/s3");
const counts_1 = require("../api/counts");
function createDynamicRouter(keystone) {
    // ensure keystone nav has been initialised
    // TODO: move this elsewhere (on demand generation, or client-side?)
    if (!keystone.nav) {
        keystone.nav = keystone.initNav();
    }
    const router = express.Router();
    // Use bodyParser and multer to parse request bodies and file uploads
    router.use(bodyParser.json({}));
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(multer({ includeEmptyFields: true }));
    // Bind the request to the keystone instance
    router.use(function (req, res, next) {
        req['keystone'] = keystone;
        next();
    });
    if (keystone.get('healthchecks')) {
        router.use('/server-health', createHealthchecksHandler_1.createHealthchecksHandler(keystone));
    }
    // Init API request helpers
    router.use('/api', apiError_1.apiErrorMiddleware);
    router.use('/api', logError_1.logErrorMiddleware);
    // #1: Session API
    // TODO: this should respect keystone auth options
    router.get('/api/session', session_2.sessionHandler.get);
    router.post('/api/session/signin', session_2.sessionHandler.signin);
    router.post('/api/session/signout', session_2.sessionHandler.signout);
    // #2: Session Routes
    // Bind auth middleware (generic or custom) to * routes, allowing
    // access to the generic signin page if generic auth is used
    if (keystone.get('auth') === true) {
        // TODO: poor separation of concerns; settings should be defaulted elsewhere
        if (!keystone.get('signout url')) {
            keystone.set('signout url', '/' + keystone.get('admin path') + '/signout');
        }
        if (!keystone.get('signin url')) {
            keystone.set('signin url', '/' + keystone.get('admin path') + '/signin');
        }
        if (!keystone.nativeApp || !keystone.get('session')) {
            router.all('*', session_1.persist);
        }
        router.all('/signin', signin_1.SigninRoute);
        router.all('/signout', signout_1.SignoutRoute);
        router.use(session_1.keystoneAuth);
    }
    else if (typeof keystone.get('auth') === 'function') {
        router.use(keystone.get('auth'));
    }
    // #3: Home route
    router.get('/', index_1.IndexRoute);
    // #4: Cloudinary and S3 specific APIs
    // TODO: poor separation of concerns; should / could this happen elsewhere?
    if (keystone.get('cloudinary config')) {
        router.get('/api/cloudinary/get', cloudinary_1.cloudinaryHandler.get);
        router.get('/api/cloudinary/autocomplete', cloudinary_1.cloudinaryHandler.autocomplete);
        router.post('/api/cloudinary/upload', cloudinary_1.cloudinaryHandler.upload);
    }
    if (keystone.get('s3 config')) {
        router.post('/api/s3/upload', s3_1.s3Handler.upload);
    }
    // #5: Core Lists API
    // lists
    router.all('/api/counts', counts_1.countsHandler);
    router.get('/api/:list', initList_1.initListMiddleware, list_1.listHandler.get);
    router.get('/api/:list/:format(export.csv|export.json)', initList_1.initListMiddleware, list_1.listHandler.download);
    router.post('/api/:list/create', initList_1.initListMiddleware, list_1.listHandler.create);
    router.post('/api/:list/update', initList_1.initListMiddleware, list_1.listHandler.update);
    router.post('/api/:list/delete', initList_1.initListMiddleware, list_1.listHandler.delete);
    // items
    router.get('/api/:list/:id', initList_1.initListMiddleware, item_1.itemHandler.get);
    router.post('/api/:list/:id', initList_1.initListMiddleware, item_1.itemHandler.update);
    router.post('/api/:list/:id/delete', initList_1.initListMiddleware, list_1.listHandler.delete);
    router.post('/api/:list/:id/sortOrder/:sortOrder/:newOrder', initList_1.initListMiddleware, item_1.itemHandler.sortOrder);
    // #6: List Routes
    router.all('/:list/:page([0-9]{1,5})?', index_1.IndexRoute);
    router.all('/:list/:item', index_1.IndexRoute);
    // TODO: catch 404s and errors with Admin-UI specific handlers
    return router;
}
exports.createDynamicRouter = createDynamicRouter;
