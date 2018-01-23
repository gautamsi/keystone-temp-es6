"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const tls = require("tls");
/**
 * Configures and starts express server in SSL.
 *
 * Events are fired during initialisation to allow customisation, including:
 *   - onHttpsServerCreated
 *
 * consumed by lib/core/start.js
 *
 * @api private
 */
let https;
try {
    // Use spdy if available
    https = require('spdy');
}
catch (e) {
    https = require('https');
}
function startSecureServer(keystone, app, created, callback) {
    const ssl = keystone.get('ssl');
    const host = keystone.get('ssl host') || keystone.get('host');
    const port = keystone.get('ssl port');
    let message = (ssl === 'only') ? keystone.get('name') + ' (SSL) is ready on ' : 'SSL Server is ready on ';
    let sniFunc;
    const options = keystone.get('https server options') || {};
    if (options.NPNProtocols && options.NPNProtocols.length === 1 && options.NPNProtocols[0] === 'http/1.1') {
        // Remove default value so spdy can use its own better ones
        delete options.NPNProtocols;
    }
    if (keystone.get('ssl cert') && fs.existsSync(keystone.getPath('ssl cert'))) {
        options.cert = fs.readFileSync(keystone.getPath('ssl cert'));
    }
    if (keystone.get('ssl key') && fs.existsSync(keystone.getPath('ssl key'))) {
        options.key = fs.readFileSync(keystone.getPath('ssl key'));
    }
    if (keystone.get('ssl ca') && fs.existsSync(keystone.getPath('ssl ca'))) {
        options.ca = fs.readFileSync(keystone.getPath('ssl ca'));
    }
    if (keystone.get('ssl pfx') && fs.existsSync(keystone.getPath('ssl pfx'))) {
        options.pfx = fs.readFileSync(keystone.getPath('ssl pfx'));
    }
    if (keystone.get('ssl cert data')) {
        options.cert = keystone.get('ssl cert');
    }
    if (keystone.get('ssl key data')) {
        options.key = keystone.get('ssl key');
    }
    if (keystone.get('ssl ca data')) {
        options.ca = keystone.get('ssl ca');
    }
    if (keystone.get('ssl pfx data')) {
        options.pfx = keystone.get('ssl pfx');
    }
    if (keystone.get('ssl passphrase')) {
        options.passphrase = keystone.get('ssl passphrase');
    }
    sniFunc = keystone.get('ssl sni');
    if (sniFunc) {
        options.SNICallback = function (host, cb) {
            const ctx = sniFunc(host);
            cb(null, ctx && tls.createSecureContext(ctx));
        };
    }
    if ((!options.key || !options.cert) && !options.pfx && !keystone.get('letsencrypt')) {
        if (sniFunc) {
            // We populate the config with what sniFunc returns for localhost
            const localCtx = sniFunc('localhost');
            if (localCtx) {
                for (const prop in localCtx) {
                    if (localCtx.hasOwnProperty(prop)) {
                        options[prop] = localCtx[prop];
                    }
                }
            }
        }
        if ((!options.key || !options.cert) && !options.pfx) {
            if (ssl === 'only') {
                console.log(keystone.get('name') + ' failed to start: invalid ssl configuration (certificate files required)');
                process.exit();
            }
            return callback(null, 'SSL Not Started: Invalid SSL Configuration (certificate files required)');
        }
    }
    const server = https.createServer(options, app);
    created();
    function ready(err) {
        callback(err, message);
    }
    message += 'https://' + host + ':' + port;
    keystone.httpsServer = server.listen(port, host, ready);
}
exports.startSecureServer = startSecureServer;