import React, { Component } from 'react';

import './App.css';
import Chat from '../chat/chat';
import { HeaderContainer } from '../../containers/header-container';
import {LogInContainer} from '../../containers/login'
import { loadUser } from '../../utils/local-storage';

class App extends Component { 
  
  render() {
    
    let user = loadUser();
    
    if(user===undefined){
      return(
       <LogInContainer />
    )} 
    else{
      return(
        <div className="App">             
        <HeaderContainer user={user}/>     
         <Chat  />
        </div>
      )        
    }   
  }
}

export default App
