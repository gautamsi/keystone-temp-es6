"use strict";
/**
 * This is the main entry file, which we compile the main JS bundle from. It
 * only contains the client side routing setup.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Needed for ES6 generators (redux-saga) to work
require("babel-polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_router_redux_1 = require("react-router-redux");
const App_1 = require("./App");
const store_1 = require("./store");
// Sync the browser history to the Redux store
// const history = syncHistoryWithStore(createHistory(), store);
// Initialise Keystone.User list
const lists_1 = require("../utils/lists");
Keystone.User = lists_1.listsByKey[Keystone.userList];
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(react_router_redux_1.ConnectedRouter, { history: store_1.history },
        React.createElement(react_router_dom_1.Route, { path: Keystone.adminPath + '/', component: App_1.App }))), document.getElementById('react-root'));
