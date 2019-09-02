import * as types from '../constants/action-types';
import initialState from '../constants/initial-state';
const connection = (state = initialState, action) => {
  const { socket } = action;

  switch (action.type){    
    case types.ADD_SOCKET:
      let nextState = Object.assign({}, state);
      nextState.socket = socket;          
      return nextState; 
    case types.CONNECTION_LOST:
      return {
        ...state,
        connection: action.connection
      };    
    case types.CONNECTION_RESTORE:
      return {
        ...state,
        connection: action.connection
        };
    default:
      return state;
  }
};

export default connection;