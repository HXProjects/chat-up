import React, { Component } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { MessageInput } from '../../containers/add-message';
import { MessageList } from '../../containers/messages-list';

class Chat extends Component {
  
  
  render() {
    return (
      <div className="main">
        <div className="chat-room">
          <MessageList />
          <MessageInput />                     
        </div>      
      </div>
    )
  }
}

export default Chat;
