import React from 'react';
import { removeUser } from '../../utils/local-storage';
import customHistory from '../../routes/routes-history';
import { Offline, Online } from "react-detect-offline";

const Header = (props) => {      
    const  element = (
      <>
        <div className="header_username">
          {props.user}
          <Online> online</Online>
          <Offline> ofline</Offline>
        </div>
        
        <button
        className="header_log-out_button" 
          onClick = { () => {
            props.dispatch('', false);
            removeUser();
            customHistory.push('/');
          }}          
        >
        Log Out
        </button>
      </>
      );
     
  return (
    <>
    <header className="App-header">
    <h1 className="App-title">ChatUp</h1>     
      {element}    
    </header>
    </>
  )
}

export default Header;
