import * as url from 'cloudinary-microurl';
const CLOUD_NAME = window.Keystone.cloudinary.cloud_name;
/*
    Take a cloudinary public id + options object
    and return a url
*/
export function cloudinaryResize(publicId, options = {}) {
    if (!publicId || !CLOUD_NAME)
        return false;
    return url(publicId, Object.assign({ cloud_name: CLOUD_NAME, quality: 80 }, options));
}
