import * as types from '../constants/action-types';

let nextUserId = 0;

export const addMessage = (message, author) => (
  {
  type: types.ADD_MESSAGE,  
  author,
  message
  }
);
export const loadMessage = (author, message, id, time) => ({
  type: types.LOAD_MESSAGE,
  message,
  author,
  id,
  time
})
export const recievedMessage = (author, messages, id, time) => ({
  type: types.RECEIVED_MESSAGE,
  messages,
 // author,
 // message,
 // id,
  //time
});
////---
export const getUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const logIn = (name, logStatus) => ({
  type: types.LOG_IN,  
  name,
  logStatus
});

export const logOut = () => ({
  type: types.LOG_OUT,
  id: nextUserId--
});

export const addSocket = (socket) => ({
  type: types.ADD_SOCKET,
  socket
});
export const closeConnection = () => ({
  type: types.CONNECTION_LOST,
  connection: false
});

export const restoreConnection = () => {
  return {
      type: types.CONNECTION_RESTORE,
      connection: true
  }
}