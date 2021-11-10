import { createStore } from 'redux';
import reducersRoot from './reducers';
import middleware from './middleware';

const store = createStore(reducersRoot, middleware);

export default store;
