import * as types from '../constants/action-types';
import initialState from '../constants/initial-state';

const messages = (state = initialState.messages, action) => {
  switch (action.type){
    case types.ADD_MESSAGE:
    return state;
    
    case types.RECEIVED_MESSAGE:   
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
          time: action.time
        }
      ])
    default:
    return state;
  }
}
export default messages
