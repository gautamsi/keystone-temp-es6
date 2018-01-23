/**
 * Defines a getter on the Field prototype
 *
 * @param  {string}   key    The key the getter should be at
 * @param  {function} getter The getter itself
 */
export declare function definePrototypeGetter(Constructor: any, key: any, getter: any): void;
/**
 * Define multiple getters on the Field prototype at once
 *
 * @param  {object} getterObj The getters with a getter at the key
 */
export declare function definePrototypeGetters(Constructor: any, getterObj: any): void;
