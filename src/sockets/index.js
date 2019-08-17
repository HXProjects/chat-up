import * as types from '../constants/action-types';
import {  recievedMessage, logIn} from '../actions';
import notifyMe from '../utils/notifications'

const setupSocket = (dispatch, username) => {
 // wss://wssproxy.herokuapp.com/
 // const socket = new WebSocket('wss://st-chat.shas.tel');
  const socket = new WebSocket('wss://wssproxy.herokuapp.com/');

  
  socket.onopen = () => {    
    dispatch(logIn(username));   
  }
  console.log(socket)
  
  socket.onmessage = (event) =>{     
    const serverData = JSON.parse(event.data);
    const data = serverData.slice(0,20);
    //const tenLatest
    data.sort(function(a, b) {
      return (a.time - b.time);
    });
    console.log(data.length);
    console.log(typeof data);
    /*const chatroom = document.querySelector('.chat');
    var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
   chatroom.scrollTo(0,0);  */     
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
