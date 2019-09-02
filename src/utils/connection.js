import {recievedMessage, closeConnection, restoreConnection} from '../actions';
import username from './name';
import moment from 'moment';
import store from '../store';

class setupService  {
  data  = []; 
  socket;
  arrayForSendingOffline = [];

handleMessagesFromServer = (data) => {
  let result = JSON.parse(data).reverse();
    result.map((mes) => {
      return mes.time = moment(mes.time).format('h:mm:ss a')})
    const oldState = this.data;
    const resArr = [...oldState, ...result];
    this.data = resArr;
    store.dispatch(recievedMessage(this.data));
    //const {from, message} = this.data[this.data.length-1]
    //notifyMe(from, message)
     
return this.data;
}
sentOfflineMessages = () => {
  this.arrayForSendingOffline.map((mes) => {
  const {from, message} = mes;
  return this.socket.send(JSON.stringify({
    from: from,
    message: message
  }))
})
this.arrayForSendingOffline = [];
}

setConnection = url => {
  this.socket = new WebSocket(url);
  this.socket.onopen = () => {
    console.log("Connected.");
    store.dispatch(restoreConnection());
  }

  window.addEventListener('online', () => {this.sentOfflineMessages()});

  this.socket.onclose = (event) => {
    if (event.wasClean) {
      console.log('Clear disconnected');
    } else {
      console.log('interrupt disconnected'); 
    }
    console.log('Error: ' + event.code + ' reason: ' + event.reason);
    store.dispatch(closeConnection());
    this.tryToReconnect()
  };

  this.socket.onerror = (error) => {
    console.log("Error: " + error);
    store.dispatch(closeConnection());
  };

  return this.socket
}
  tryToReconnect = () => {
    setTimeout(this.getMessages, 2000)
     return  
  }

  getMessages = () => {
    let socket = this.setConnection("wss://wssproxy.herokuapp.com/");

    return new Promise((resolve, reject) => {
          this.data = [];
          socket.onmessage = (e) => {
            if (e.data) {
              resolve(this.handleMessagesFromServer(e.data));
              }
            else(reject('could not get messages'))}    
      })
  }
sendMessage = (message) =>{
  console.log('sendmess')
  console.log(store.getState())
  console.log(username)

  let from;
 // if(username){
    from=localStorage.getItem('user-name');
 // }
  //else{
  //  from =store.getState().users;
  //}
    
  
  
    //from = store.getState().nickName
  
  if (navigator.onLine) {
    this.socket.send(JSON.stringify({
      from: from,
      message: message
    }))
  }
  else{
    this.arrayForSendingOffline.push({
      from: from,
      message: message
    })
  }
}
};
export default setupService;