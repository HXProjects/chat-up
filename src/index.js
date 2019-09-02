import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route} from 'react-router-dom';

import './index.css';
import App from '../src/components/app/App';
import customHistory from './routes/routes-history';
import * as serviceWorker from './serviceWorker';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route exact path='/' component={App}/>
    </Router>    
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
