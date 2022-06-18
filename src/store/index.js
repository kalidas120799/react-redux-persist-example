import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { createWhitelistFilter } from "redux-persist-transform-filter";
import storage from 'redux-persist/lib/storage';  //for local storage
import storageSession from 'redux-persist/lib/storage/session';  // for session storage
import localforage from "localforage"; // for IndexedDb
import rootReducer from "../reducers";

const persistConfig = {
    key: '525b6d2a-d824-41c4-a511-978675d09d6c',
    // storage,  //for localstorage
    // storage: storageSession  // for session storage
    storage: localforage,
    whitelist: ['user'],
    transforms: [createWhitelistFilter('user', ['isLogin'])]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
    middleware = compose(
        middleware,
        devtools
    );
}

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };