"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("cloudinary-microurl");
const CLOUD_NAME = window.Keystone.cloudinary.cloud_name;
/*
    Take a cloudinary public id + options object
    and return a url
*/
function cloudinaryResize(publicId, options = {}) {
    if (!publicId || !CLOUD_NAME)
        return false;
    return url(publicId, Object.assign({ cloud_name: CLOUD_NAME, quality: 80 }, options));
}
exports.cloudinaryResize = cloudinaryResize;
