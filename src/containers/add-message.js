import { connect } from 'react-redux';
import ChatInput from '../components/chat-input/chat-input';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: ( message) => {
    dispatch(addMessage( message))
  }
});

export const MessageInput = connect(() =>({}), mapDispatchToProps)(ChatInput)
