"use strict";
/**
 * The App component is the component that is rendered around all views, and
 * contains common things like navigation, footer, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("./elemental");
const react_router_redux_1 = require("react-router-redux");
const glamor_1 = require("glamor");
const react_router_dom_1 = require("react-router-dom");
const Mobile_1 = require("./components/Navigation/Mobile");
const Primary_1 = require("./components/Navigation/Primary");
const Secondary_1 = require("./components/Navigation/Secondary");
const Footer_1 = require("./components/Footer");
const Home_1 = require("./screens/Home");
const Item_1 = require("./screens/Item");
const List_1 = require("./screens/List");
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
exports.App = (props) => {
    const listsByPath = require('../utils/lists').listsByPath;
    let children = props.children;
    // If we're on either a list or an item view
    let currentList, currentSection;
    if (props.match.params.listId) {
        currentList = listsByPath[props.match.params.listId];
        // If we're on a list path that doesn't exist (e.g. /keystone/gibberishasfw34afsd) this will
        // be undefined
        if (!currentList) {
            children = (React.createElement(elemental_1.Container, null,
                React.createElement("p", null, "List not found!"),
                React.createElement(react_router_dom_1.Link, { to: `${Keystone.adminPath}` }, "Go back home")));
        }
        else {
            // Get the current section we're in for the navigation
            currentSection = Keystone.nav.by.list[currentList.key];
        }
    }
    // Default current section key to dashboard
    const currentSectionKey = (currentSection && currentSection.key) || 'dashboard';
    return (React.createElement("div", { className: `${glamor_1.css(classes.wrapper)}` },
        React.createElement("header", null,
            React.createElement(Mobile_1.MobileNavigation, { brand: Keystone.brand, currentListKey: props.match.params.listId, currentSectionKey: currentSectionKey, sections: Keystone.nav.sections, signoutUrl: Keystone.signoutUrl }),
            React.createElement(Primary_1.PrimaryNavigation, { currentSectionKey: currentSectionKey, brand: Keystone.brand, sections: Keystone.nav.sections, signoutUrl: Keystone.signoutUrl }),
            (currentSection) ? (React.createElement(Secondary_1.SecondaryNavigation, { currentListKey: props.match.params.listId, lists: currentSection.lists, itemId: props.match.params.itemId })) : null),
        React.createElement("main", { className: `${glamor_1.css(classes.body)}` },
            React.createElement(react_router_redux_1.ConnectedRouter, { history: props.history },
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: Keystone.adminPath + '/', component: Home_1.Home }),
                    React.createElement(react_router_dom_1.Route, { exact: true, path: Keystone.adminPath + '/:listId', component: List_1.List }),
                    React.createElement(react_router_dom_1.Route, { path: Keystone.adminPath + '/:listId/:itemId', component: Item_1.Item })))),
        React.createElement(Footer_1.Footer, { appversion: Keystone.appversion, backUrl: Keystone.backUrl, brand: Keystone.brand, User: Keystone.User, user: Keystone.user, version: Keystone.version })));
};
