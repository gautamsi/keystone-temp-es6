"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The signin page, it renders a page with a username and password input form.
 *
 * This is decoupled from the main app (in the "App/" folder) because we inject
 * lots of data into the other screens (like the lists that exist) that we don't
 * want to have injected here, so this is a completely separate route and template.
 */
const qs = require("qs");
const React = require("react");
const ReactDOM = require("react-dom");
const Signin_1 = require("./Signin");
const params = qs.parse(window.location.search.replace(/^\?/, ''));
const from = typeof params.from === 'string' && params.from.charAt(0) === '/'
    ? params.from : undefined;
ReactDOM.render(React.createElement(Signin_1.SigninView, { brand: Keystone.brand, from: from, logo: Keystone.logo, user: Keystone.user, userCanAccessKeystone: Keystone.userCanAccessKeystone }), document.getElementById('signin-view'));
