"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../admin/server");
const compression = require("compression");
const favicon = require("serve-favicon");
const methodOverride = require("method-override");
const morgan = require("morgan");
const language_1 = require("../lib/middleware/language");
const initLetsEncrypt_1 = require("./initLetsEncrypt");
const initSslRedirect_1 = require("./initSslRedirect");
const initTrustProxy_1 = require("./initTrustProxy");
const initViewEngine_1 = require("./initViewEngine");
const initViewLocals_1 = require("./initViewLocals");
const bindIPRestrictions_1 = require("./bindIPRestrictions");
const bindBodyParser_1 = require("./bindBodyParser");
const bindLessMiddleware_1 = require("./bindLessMiddleware");
const bindSassMiddleware_1 = require("./bindSassMiddleware");
const bindStylusMiddleware_1 = require("./bindStylusMiddleware");
const bindStaticMiddleware_1 = require("./bindStaticMiddleware");
const bindSessionMiddleware_1 = require("./bindSessionMiddleware");
const bindRedirectsHandler_1 = require("./bindRedirectsHandler");
const bindErrorHandlers_1 = require("./bindErrorHandlers");
const frameGuard_1 = require("../lib/security/frameGuard");
function createApp(keystone, express) {
    if (!keystone.app) {
        if (!express) {
            express = require('express');
        }
        keystone.app = express();
    }
    const app = keystone.app;
    initLetsEncrypt_1.initLetsEncrypt(keystone, app);
    initSslRedirect_1.initSslRedirect(keystone, app);
    keystone.initDatabaseConfig();
    keystone.initExpressSession(keystone.mongoose);
    initTrustProxy_1.initTrustProxy(keystone, app);
    initViewEngine_1.initViewEngine(keystone, app);
    initViewLocals_1.initViewLocals(keystone, app);
    bindIPRestrictions_1.bindIPRestrictions(keystone, app);
    // Compress response bodies
    if (keystone.get('compress')) {
        app.use(compression());
    }
    // Pre static config
    if (typeof keystone.get('pre:static') === 'function') {
        keystone.get('pre:static')(app);
    }
    app.use(function (req, res, next) {
        keystone.callHook('pre:static', req, res, next);
    });
    // Serve static assets
    if (keystone.get('favicon')) {
        app.use(favicon(keystone.getPath('favicon')));
    }
    // unless the headless option is set (which disables the Admin UI),
    // bind the Admin UI's Static Router for public resources
    if (!keystone.get('headless')) {
        app.use('/' + keystone.get('admin path'), server_1.createStaticRouter(keystone));
    }
    bindLessMiddleware_1.bindLessMiddleware(keystone, app);
    bindSassMiddleware_1.bindSassMiddleware(keystone, app);
    bindStylusMiddleware_1.bindStylusMiddleware(keystone, app);
    bindStaticMiddleware_1.bindStaticMiddleware(keystone, app);
    bindSessionMiddleware_1.bindSessionMiddleware(keystone, app);
    // Log dynamic requests
    app.use(function (req, res, next) {
        keystone.callHook('pre:logger', req, res, next);
    });
    // Bind default logger (morgan)
    if (keystone.get('logger')) {
        const loggerOptions = keystone.get('logger options');
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        if (loggerOptions && typeof loggerOptions.tokens === 'object') {
            for (const key in loggerOptions.tokens) {
                if (hasOwnProperty.call(loggerOptions.tokens, key) && typeof loggerOptions.tokens[key] === 'function') {
                    morgan.token(key, loggerOptions.tokens[key]);
                }
            }
        }
        app.use(morgan(keystone.get('logger'), loggerOptions));
    }
    // Bind custom logging middleware
    if (keystone.get('logging middleware')) {
        app.use(keystone.get('logging middleware'));
    }
    // unless the headless option is set (which disables the Admin UI),
    // bind the Admin UI's Dynamic Router
    if (!keystone.get('headless')) {
        if (typeof keystone.get('pre:admin') === 'function') {
            keystone.get('pre:admin')(app);
        }
        app.use(function (req, res, next) {
            keystone.callHook('pre:admin', req, res, next);
        });
        app.use('/' + keystone.get('admin path'), server_1.createDynamicRouter(keystone));
    }
    // Pre bodyparser middleware
    if (typeof keystone.get('pre:bodyparser') === 'function') {
        keystone.get('pre:bodyparser')(app);
    }
    app.use(function (req, res, next) {
        keystone.callHook('pre:bodyparser', req, res, next);
    });
    bindBodyParser_1.bindBodyParser(keystone, app);
    app.use(methodOverride());
    // Set language preferences
    const languageOptions = keystone.get('language options') || {};
    if (!languageOptions.disable) {
        app.use(language_1.language(keystone));
    }
    // Add 'X-Frame-Options' to response header for ClickJacking protection
    if (keystone.get('frame guard')) {
        app.use(frameGuard_1.frameGuard(keystone));
    }
    // Pre route config
    if (typeof keystone.get('pre:routes') === 'function') {
        keystone.get('pre:routes')(app);
    }
    app.use(function (req, res, next) {
        keystone.callHook('pre:routes', req, res, next);
    });
    // Configure application routes
    const appRouter = keystone.get('routes');
    if (typeof appRouter === 'function') {
        if (appRouter.length === 3) {
            // new:
            //    var myRouter = new express.Router();
            //    myRouter.get('/', (req, res) => res.send('hello world'));
            //    keystone.set('routes', myRouter);
            app.use(appRouter);
        }
        else {
            // old:
            //    var initRoutes = function (app) {
            //      app.get('/', (req, res) => res.send('hello world'));
            //    }
            //    keystone.set('routes', initRoutes);
            appRouter(app);
        }
    }
    bindRedirectsHandler_1.bindRedirectsHandler(keystone, app);
    // Error config
    if (typeof keystone.get('pre:error') === 'function') {
        keystone.get('pre:error')(app);
    }
    app.use(function (req, res, next) {
        keystone.callHook('pre:error', req, res, next);
    });
    bindErrorHandlers_1.bindErrorHandlers(keystone, app);
    return app;
}
exports.createApp = createApp;
