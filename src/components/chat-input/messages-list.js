import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

const MessagesList = ({ messages }) => ( 
  <section className="messages-list">
    <div className="chat">
      {
        messages.map(message => (
          <Message 
            key={message.time}
            {...message}
          />
      ))}
    </div>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessagesList;
