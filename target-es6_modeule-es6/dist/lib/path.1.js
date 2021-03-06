"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("./path");
const utils = require("keystone-utils");
/**
 * Path Class
 */
class Path {
    constructor(str) {
        this.str = str;
        this.parts = this.str.split('.');
        this.last = this.parts[this.parts.length - 1];
    }
    addTo(obj, val) {
        let o = obj;
        for (let i = 0; i < this.parts.length - 1; i++) {
            if (!utils.isObject(o[this.parts[i]])) {
                o[this.parts[i]] = {};
            }
            o = o[this.parts[i]];
        }
        o[this.last] = val;
        return obj;
    }
    get(obj, subpath) {
        if (typeof obj !== 'object')
            throw new TypeError('Path.get: obj argument must be an Object');
        let i;
        if (subpath) {
            const nested = subpath.charAt(0) === '.';
            const flatPath = this.str + subpath;
            if (flatPath in obj) {
                return obj[flatPath];
            }
            for (i = 0; i < this.parts.length - (nested ? 0 : 1); i++) {
                if (typeof obj !== 'object')
                    return undefined;
                obj = obj[this.parts[i]];
            }
            if (nested) {
                subpath = subpath.substr(1);
            }
            else {
                subpath = this.last + subpath;
            }
            return (typeof obj === 'object') ? obj[subpath] : undefined;
        }
        else if (this.str in obj) {
            return obj[this.str];
        }
        else {
            for (i = 0; i < this.parts.length; i++) {
                if (typeof obj !== 'object')
                    return undefined;
                obj = obj[this.parts[i]];
            }
            return obj;
        }
    }
}
exports.Path = Path;
exports.p1 = new Path('b.c.d');
exports.p2 = new path.Path('b.c.d');
exports.obj = { b: { c: { d: 'x' } } };
console.log(exports.p1.get(exports.obj, 'b'));
console.log(exports.p2.get(exports.obj, 'b'));
//# sourceMappingURL=path.1.js.map