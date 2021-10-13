import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { initilalStoreState, rootReducer } from './store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initilalStoreState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
