import * as types from '../constants/action-types';
import initialState from '../constants/initial-state';

const users = (state = initialState, action) => {
  const { name, logIn } = action;

  switch (action.type){    
    
    case types.LOG_IN:
      if ( typeof action.name === undefined) {
        return state;
      }    
      let nextState = Object.assign({}, state);
      nextState.logIn = logIn;
      nextState.userName = name;    
      return nextState;

    case types.LOG_OUT:
      let logOutState = Object.assign({}, state);
      logOutState.logIn = false;
      logOutState.userName = '';
      return logOutState;

    default:
      return state;
  }
};

export default users;
