import { Keystone } from '../keystone';
export declare function setKeystone(_keystone: Keystone): void;
/**
 * Signs in a user using user obejct
 *
 * @param {Object} user - user object
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @param {function()} onSuccess callback, is passed the User instance
 */
export declare function signinWithUser(user: any, req: any, res: any, onSuccess: any, onFail?: any): void;
export declare function signin(lookup: any, req: any, res: any, onSuccess: any, onFail: any): void;
/**
 * Signs the current user out and resets the session
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @param {function()} next callback
 */
export declare function signout(req: any, res: any, next: any): void;
/**
 * Middleware to ensure session persistence across server restarts
 *
 * Looks for a userId cookie, and if present, and there is no user signed in,
 * automatically signs the user in.
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @param {function()} next callback
 */
export declare function persist(req: any, res: any, next: any): void;
/**
 * Middleware to enable access to Keystone
 *
 * Bounces the user to the signin screen if they are not signed in or do not have permission.
 *
 * req.user is the user returned by the database. It's type is Keystone.List.
 *
 * req.user.canAccessKeystone denotes whether the user has access to the admin panel.
 * If you're having issues double check your user model. Setting `canAccessKeystone` to true in
 * the database will not be reflected here if it is virtual.
 * See http://mongoosejs.com/docs/guide.html#virtuals
 *
 * @param {Object} req - express request object
 * @param req.user - The user object Keystone.List
 * @param req.user.canAccessKeystone {Boolean|Function}
 * @param {Object} res - express response object
 * @param {function()} next callback
 */
export declare function keystoneAuth(req: any, res: any, next: any): any;
