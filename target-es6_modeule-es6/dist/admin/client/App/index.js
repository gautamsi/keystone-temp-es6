/**
 * This is the main entry file, which we compile the main JS bundle from. It
 * only contains the client side routing setup.
 */
// Needed for ES6 generators (redux-saga) to work
import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { App } from './App';
import { store, history } from './store';
// Sync the browser history to the Redux store
// const history = syncHistoryWithStore(createHistory(), store);
// Initialise Keystone.User list
import { listsByKey } from '../utils/lists';
Keystone.User = listsByKey[Keystone.userList];
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(Route, { path: Keystone.adminPath + '/', component: App }))), document.getElementById('react-root'));
