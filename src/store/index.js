import { createStore } from 'redux';
import reducers from '../reducers/';

import username from '../utils/name';
const preloadState = {  
  users: username
}
const store = createStore(
  reducers,
  preloadState
  //applyMiddleware(sagaMiddleware)
);
export default store;