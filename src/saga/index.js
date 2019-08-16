import { takeEvery } from 'redux-saga/effects';

import * as types from '../constants/action-types';

const handleNewMessage = function* handleNewMessage(params){
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    
   let name = params.usern
    action.author = params.username
    params.socket.send(JSON.stringify({
      from: name,
      message: action.message,
    }))
  })
}
export default handleNewMessage;
