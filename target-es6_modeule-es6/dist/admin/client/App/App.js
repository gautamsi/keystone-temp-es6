/**
 * The App component is the component that is rendered around all views, and
 * contains common things like navigation, footer, etc.
 */
import * as React from 'react';
import { Container } from './elemental';
import { ConnectedRouter } from 'react-router-redux';
import { css } from 'glamor';
import { Link, Switch, Route } from 'react-router-dom';
import { MobileNavigation } from './components/Navigation/Mobile';
import { PrimaryNavigation } from './components/Navigation/Primary';
import { SecondaryNavigation } from './components/Navigation/Secondary';
import { Footer } from './components/Footer';
import { Home } from './screens/Home';
import { Item } from './screens/Item';
import { List } from './screens/List';
const classes = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        flexGrow: 1,
    },
};
export const App = (props) => {
    const listsByPath = require('../utils/lists').listsByPath;
    let children = props.children;
    // If we're on either a list or an item view
    let currentList, currentSection;
    if (props.match.params.listId) {
        currentList = listsByPath[props.match.params.listId];
        // If we're on a list path that doesn't exist (e.g. /keystone/gibberishasfw34afsd) this will
        // be undefined
        if (!currentList) {
            children = (React.createElement(Container, null,
                React.createElement("p", null, "List not found!"),
                React.createElement(Link, { to: `${Keystone.adminPath}` }, "Go back home")));
        }
        else {
            // Get the current section we're in for the navigation
            currentSection = Keystone.nav.by.list[currentList.key];
        }
    }
    // Default current section key to dashboard
    const currentSectionKey = (currentSection && currentSection.key) || 'dashboard';
    return (React.createElement("div", { className: `${css(classes.wrapper)}` },
        React.createElement("header", null,
            React.createElement(MobileNavigation, { brand: Keystone.brand, currentListKey: props.match.params.listId, currentSectionKey: currentSectionKey, sections: Keystone.nav.sections, signoutUrl: Keystone.signoutUrl }),
            React.createElement(PrimaryNavigation, { currentSectionKey: currentSectionKey, brand: Keystone.brand, sections: Keystone.nav.sections, signoutUrl: Keystone.signoutUrl }),
            (currentSection) ? (React.createElement(SecondaryNavigation, { currentListKey: props.match.params.listId, lists: currentSection.lists, itemId: props.match.params.itemId })) : null),
        React.createElement("main", { className: `${css(classes.body)}` },
            React.createElement(ConnectedRouter, { history: props.history },
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: Keystone.adminPath + '/', component: Home }),
                    React.createElement(Route, { exact: true, path: Keystone.adminPath + '/:listId', component: List }),
                    React.createElement(Route, { path: Keystone.adminPath + '/:listId/:itemId', component: Item })))),
        React.createElement(Footer, { appversion: Keystone.appversion, backUrl: Keystone.backUrl, brand: Keystone.brand, User: Keystone.User, user: Keystone.user, version: Keystone.version })));
};
