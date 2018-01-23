"use strict";
// (React as any).PropTypes = PropTypes;
// (React as any).createClass = createClass;
const utils = require("keystone-utils");
const keystone_1 = require("./keystone");
const email_1 = require("./lib/email");
const session = require("./lib/session");
const list_1 = require("./lib/list");
const server = require("./admin/server");
const session_1 = require("./lib/session");
const types_1 = require("./fields/types");
const path = require("path");
const view_1 = require("./lib/view");
/**
 * Don't use process.cwd() as it breaks module encapsulation
 * Instead, let's use module.parent if it's present, or the module itself if there is no parent (probably testing keystone directly if that's the case)
 * This way, the consuming app/module can be an embedded node_module and path resolutions will still work
 * (process.cwd() breaks module encapsulation if the consuming app/module is itself a node_module)
 */
let moduleRoot = (function (_rootPath) {
    let parts = _rootPath.split(path.sep);
    parts.pop(); // get rid of /node_modules from the end of the path
    return parts.join(path.sep);
})(module.parent ? module.parent.paths[0] : module.paths[0]);
keystone_1.Keystone.instance.set('module root', moduleRoot);
/**
 * The exports object is an instance of Keystone.
 */
// const keystone = Keystone.instance;
// export default keystone;
session_1.setKeystone(keystone_1.Keystone.instance);
keystone_1.Keystone.Email = email_1.Email;
keystone_1.Keystone.session = session;
keystone_1.Keystone.List = list_1.List.init(keystone_1.Keystone.instance);
keystone_1.Keystone.Admin.Server = server;
keystone_1.Keystone.View = view_1.View;
keystone_1.Keystone.utils = utils;
// export const keystone = Keystone.instance;
// old code compatibility
keystone_1.keystone.Field = { Types: types_1.FieldTypes };
keystone_1.keystone.List = list_1.List;
keystone_1.keystone.View = view_1.View;
keystone_1.keystone.session = session;
keystone_1.keystone.content = keystone_1.Keystone.content;
module.exports = keystone_1.keystone;
