import * as types from '../constants/action-types';
import {  recievedMessage, logIn} from '../actions';
import notifyMe from '../utils/notifications'

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('wss://st-chat.shas.tel');
  
  socket.onopen = () => {    
    dispatch(logIn(username));   
  }
  
  socket.onmessage = (event) =>{     
    const data = JSON.parse(event.data); 
    console.log(data.length);
    console.log(typeof data);
    //const chatroom = document.querySelector('.chat');
    
   //chatroom.scrollTo(0,0);       
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
  socket.onclose = () =>{
    alert('connection closed');
  }
  return socket;
}
export default setupSocket;
