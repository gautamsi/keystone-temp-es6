import { getToken, CSRF_HEADER_KEY } from '../../../lib/security/csrf';
import * as _ from 'lodash';
import * as ejs from 'ejs';
import * as path from 'path';
const templatePath = path.resolve(__dirname, '../templates/index.html');
export function IndexRoute(req, res) {
    const keystone = req.keystone;
    const lists = {};
    _.forEach(keystone.lists, function (list, key) {
        lists[key] = list.getOptions();
    });
    const UserList = keystone.list(keystone.get('user model'));
    const orphanedLists = keystone.getOrphanedLists().map(function (list) {
        return _.pick(list, ['key', 'label', 'path']);
    });
    let backUrl = keystone.get('back url');
    if (backUrl === undefined) {
        // backUrl can be falsy, to disable the link altogether
        // but if it's undefined, default it to "/"
        backUrl = '/';
    }
    const keystoneData = {
        adminPath: '/' + keystone.get('admin path'),
        appversion: keystone.get('appversion'),
        backUrl: backUrl,
        brand: keystone.get('brand'),
        csrf: { header: {} },
        devMode: !!process.env.KEYSTONE_DEV,
        lists: lists,
        nav: keystone.nav,
        orphanedLists: orphanedLists,
        signoutUrl: keystone.get('signout url'),
        user: {
            id: req.user.id,
            name: UserList.getDocumentName(req.user) || '(no name)',
        },
        userList: UserList.key,
        version: keystone.version,
        wysiwyg: {
            options: {
                enableImages: keystone.get('wysiwyg images') ? true : false,
                enableCloudinaryUploads: keystone.get('wysiwyg cloudinary images') ? true : false,
                enableS3Uploads: keystone.get('wysiwyg s3 images') ? true : false,
                additionalButtons: keystone.get('wysiwyg additional buttons') || '',
                additionalPlugins: keystone.get('wysiwyg additional plugins') || '',
                additionalOptions: keystone.get('wysiwyg additional options') || {},
                overrideToolbar: keystone.get('wysiwyg override toolbar'),
                skin: keystone.get('wysiwyg skin') || 'keystone',
                menubar: keystone.get('wysiwyg menubar'),
                importcss: keystone.get('wysiwyg importcss') || '',
            }
        },
    };
    keystoneData.csrf.header[CSRF_HEADER_KEY] = getToken(req, res);
    const codemirrorPath = keystone.get('codemirror url path')
        ? '/' + keystone.get('codemirror url path')
        : '/' + keystone.get('admin path') + '/js/lib/codemirror';
    const locals = {
        adminPath: keystoneData.adminPath,
        cloudinaryScript: false,
        codemirrorPath: codemirrorPath,
        env: keystone.get('env'),
        fieldTypes: keystone.fieldTypes,
        ga: {
            property: keystone.get('ga property'),
            domain: keystone.get('ga domain'),
        },
        keystone: keystoneData,
        title: keystone.get('name') || 'Keystone',
    };
    const cloudinaryConfig = keystone.get('cloudinary config');
    if (cloudinaryConfig) {
        const cloudinary = require('cloudinary');
        const cloudinaryUpload = cloudinary.uploader.direct_upload();
        keystoneData.cloudinary = {
            cloud_name: keystone.get('cloudinary config').cloud_name,
            api_key: keystone.get('cloudinary config').api_key,
            timestamp: cloudinaryUpload.hidden_fields.timestamp,
            signature: cloudinaryUpload.hidden_fields.signature,
        };
        locals.cloudinaryScript = cloudinary.cloudinary_js_config();
    }
    ejs.renderFile(templatePath, locals, { delimiter: '%' }, function (err, str) {
        if (err) {
            console.error('Could not render Admin UI Index Template:', err);
            return res.status(500).send(keystone.wrapHTMLError('Error Rendering Admin UI', err.message));
        }
        res.send(str);
    });
}
