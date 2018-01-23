"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _debug = require("debug");
const ipRangeRestrict_1 = require("../lib/security/ipRangeRestrict");
const debug = _debug('keystone:server:bindIpRestrictions');
function bindIPRestrictions(keystone, app) {
    // Check for IP range restrictions
    if (keystone.get('allowed ip ranges')) {
        if (!app.get('trust proxy')) {
            console.log('KeystoneJS Initialisaton Error:\n\n'
                + 'to set IP range restrictions the "trust proxy" setting must be enabled.\n\n');
            process.exit(1);
        }
        debug('adding IP ranges', keystone.get('allowed ip ranges'));
        app.use(ipRangeRestrict_1.ipRangeRestrict(keystone.get('allowed ip ranges'), keystone.wrapHTMLError));
    }
}
exports.bindIPRestrictions = bindIPRestrictions;
