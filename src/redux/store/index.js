import { createStore, compose } from 'redux';
import reducersRoot from '../reducers';
import middleware from '../middleware';

const composedEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducersRoot, composedEnhancers(middleware));

export default store;
