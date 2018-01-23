"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(req, res) {
    return res.json({ user: req.user });
}
exports.get = get;
