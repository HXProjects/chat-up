import { connect } from 'react-redux';
import MessagesList from '../components/chat-input/messages-list';

export const MessageList = connect(state => ({
  messages: state.messages
}), {})(MessagesList);

