import * as types from '../constants/action-types';
import {  recievedMessage, logIn, addSocket} from '../actions';
import notifyMe from '../utils/notifications'
// const socket = new WebSocket('wss://st-chat.shas.tel');old ws server

const setupSocket = (store, username) => {
   const {dispatch}=store
   let isConnected = false;
  let reconnectionTime = 5000;
 const socket = new WebSocket('wss://wssproxy.herokuapp.com/');
 
    console.log(isConnected)
    
  socket.onopen = () => { 
    console.log('conected');
    isConnected = true;
    dispatch(logIn(username));    
  }
 
  socket.onmessage = (event) =>{     
    const serverData = JSON.parse(event.data);
    const data = serverData.slice(0,20);
    data.sort(function(a, b) {
      return (a.time - b.time);
    });       
    data.forEach(element => {      
      dispatch(recievedMessage(element.from, element.message, element.id, element.time))
    });
    notifyMe();
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(recievedMessage( data.from, data.message))
        break;             
      default:
        break;
    }
  }
  socket.onerror = function(error) {
    isConnected = false;
  };

  socket.onclose = () =>{ 
    console.log('disconected');
    isConnected = false;
    //const messagesList =document.querySelector('.chat');
    //while (messagesList.firstChild) {
     // messagesList.removeChild(messagesList.firstChild);
    //}

   setTimeout(() => {setupSocket(store, username)} , reconnectionTime);
      
  }
  console.log('store:')
  
 store.dispatch(addSocket(socket));
console.log(store.getState());
const resultSocket=store.getState().socket.socket;

  return resultSocket;
}

export default setupSocket;
/*
https://github.com/socketio/socket.io/issues/2476
*/