import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Cat from '../../images.jpg'


const Message = ({author, message, id,time}) => {
 return(
<div className="user-message-box">
  <img src={Cat} className="user-icon" alt="user ico"/>
  <div className="user-message-content">
    <div className="user-message-name">{author}</div> 
    <div className="user-message">{message}</div>
  </div>  
  <div className='user-message-time'>{moment(time).format('h:mm:ss a')}</div>
</div>)
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
