import React from 'react';

import { saveUser } from '../../utils/local-storage';
import customHistory from '../../routes/routes-history';

const Login = (props) => {
  let input;

  return (
    <div >    
      <h2>Enter your name to continue...</h2>
      <div className="log-in-container">
        <div className="input">         
          <input 
            type="text"             
            className="username" 
            placeholder=' your name is ...' 
            onKeyPress = {(e) => {
              console.log('in login')
              if(e.key === 'Enter') {
                props.dispatch(input.value, true);
                saveUser(input.value);
                input.value='';
                customHistory.push('/')                
              }
            }}
           ref={node => {
             input=node
           }}
          />
        </div>
      </div>     
    </div>
  )
};

export default Login;
