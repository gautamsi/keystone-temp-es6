"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_redux_1 = require("react-router-redux");
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const redux_saga_1 = require("redux-saga");
const main_1 = require("./screens/List/reducers/main");
const active_1 = require("./screens/List/reducers/active");
const reducer_1 = require("./screens/Item/reducer");
const reducer_2 = require("./screens/Home/reducer");
const sagas_1 = require("./sagas");
const createBrowserHistory_1 = require("history/createBrowserHistory");
exports.history = createBrowserHistory_1.default();
// Combine the reducers to one state
const reducers = redux_1.combineReducers({
    lists: main_1.listsReducer,
    active: active_1.activeReducer,
    item: reducer_1.itemReducer,
    home: reducer_2.homeReducer,
    routing: react_router_redux_1.routerReducer,
});
const sagaMiddleware = redux_saga_1.default();
// const middleware = applyMiddleware(
//     routerMiddleware(history),
//     sagaMiddleware
//   );
// Create the store
exports.store = redux_1.createStore(reducers, redux_1.compose(redux_1.applyMiddleware(
// Support thunked actions and react-router-redux
redux_thunk_1.default, react_router_redux_1.routerMiddleware(exports.history), sagaMiddleware), 
// Support the Chrome DevTools extension
window['devToolsExtension'] ? window['devToolsExtension']() : f => f));
sagaMiddleware.run(sagas_1.rootSaga);
