import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollableFeed from 'react-scrollable-feed';
import Message from './message';
import { uniqueId } from 'lodash';
import { loadMessage } from '../../actions/index';

class MessagesList extends Component {
  constructor(){
    super();
    this.state = {
        messagesAmmount: 20
    }   
}
componentDidMount(){
  const {data, dispatch} = this.props;
  console.log('conponentdidamount')
  data.getMessages().then((data) => {
  //  console.log(data)
    data.forEach(element => {
    
     // console.log(dispatch(loadMessage(element.from, element.message, element.id, element.time)))      
    dispatch(loadMessage(element.from, element.message, element.id, element.time))
  });
  
})
}
render(){
  const { data } = this.props;
  
  let messages = data.data // console.log(`messages${data}`)
  let arrayForLastMessages;
  //console.log(messages)
  if ( messages.length > 20 ) {
    arrayForLastMessages = messages.slice(-this.state.messagesAmmount)
 }
 else{
    arrayForLastMessages = messages;
  }
return ( 
  <section className="messages-list">
    <ScrollableFeed> 
      <div className="chat">
      {
        arrayForLastMessages.map(message => (
          <Message 
            key={uniqueId()}
            {...message}
          />
      ))}
      </div>
    </ScrollableFeed>
  </section>
)
}
}       

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
