import { takeEvery } from 'redux-saga/effects';

import * as types from '../constants/action-types';

const handleNewMessage = function* handleNewMessage(params){
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    console.log(params);
    let socket = params.socket;
   let name = params.usern
    action.author = params.username
    socket.send(JSON.stringify({
      from: name,
      message: action.message,
    }))
  })
}
export default handleNewMessage;
