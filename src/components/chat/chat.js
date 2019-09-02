import React, { Component } from 'react';
import { MessageInput } from '../../containers/add-message';
import { MessageList } from '../../containers/messages-list';

class Chat extends Component {
  
  
  render() {
    return (
      <div className="main">
        <div className="chat-room">
          <MessageList data ={this.props.data}/>
          <MessageInput data={this.props.data}/>                     
        </div>      
      </div>
    )
  }
}

export default Chat;
