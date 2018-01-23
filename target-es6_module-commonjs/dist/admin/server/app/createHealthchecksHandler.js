"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeRequire_1 = require("../../../lib/safeRequire");
function createHealthchecksHandler(keystone) {
    const healthcheck = safeRequire_1.safeRequire('keystone-healthchecks', 'healthchecks');
    let healthcheckConfig = keystone.get('healthchecks');
    if (healthcheckConfig === true) {
        healthcheckConfig = {};
        // By default, we simply bind the user model healthcheck if there is a
        // user model. This validates we can successfully query the database.
        if (keystone.get('user model')) {
            const User = keystone.list(keystone.get('user model'));
            healthcheckConfig.canQueryUsers = healthcheck.healthchecks.canQueryListFactory(User);
        }
    }
    return healthcheck.createRoute(healthcheckConfig);
}
exports.createHealthchecksHandler = createHealthchecksHandler;
