import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../../images.jpg'

const ChatInput = (props) => { 
  let input; 
  console.log('2props')
 console.log(props.data)
  return (
    <section className="new-message" >
    <img src={Cat} className="input-user-icon" alt="cat icon"/>      
    <textarea 
      className="input-messsage"
      onKeyPress={(e) =>{
        if(e.key === 'Enter') {
          console.log(props);
          props.data.sendMessage(input.value)
          input.value = ''
        }
      }}
      type="text"
      placeholder=" write a message and hit the enter..."
      ref={(node)=> {
        input=node
      }}
    ></textarea>    
    </section>
  )  
}

ChatInput.propTypes ={
  dispatch: PropTypes.func.isRequired
}

export default ChatInput;
