import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../../images.jpg'


const Message = ({from, message,time}) => {  
 return(
<div className="user-message-box">
  <img src={Cat} className="user-icon" alt="user ico"/>
  <div className="user-message-content">
    <div className="user-message-name">{from}</div> 
    <div className="user-message">{message}</div>
  </div>  
  <div className='user-message-time'>{time}</div>
</div>)
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired
};

export default Message;
