import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { Router, Route} from 'react-router-dom';

import './index.css';
import App from '../src/components/app/App';
import customHistory from './routes/routes-history';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import  setupSocket  from './sockets';
import handleNewMessage from './saga';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();
const preloadState = {  
  users: username
}
const store = createStore(
  reducers,
  preloadState,
  applyMiddleware(sagaMiddleware)
);
let usern = store.getState().users;

const socket = setupSocket(store.dispatch, usern);

sagaMiddleware.run(handleNewMessage, {socket, usern})

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route exact path='/' component={App}/>
    </Router>
    
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
