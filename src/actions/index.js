import * as types from '../constants/action-types';

let nextUserId = 0;

export const addMessage = (message, author) => (
  {
  type: types.ADD_MESSAGE,  
  author,
  message
  }
);

export const recievedMessage = (author, message, id, time) => ({
  type: types.RECEIVED_MESSAGE,  
  author,
  message,
  id,
  time
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
})
