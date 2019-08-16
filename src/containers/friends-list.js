import { connect } from 'react-redux';
import  Chatlist from '../components/chat-list/chat-list';

export const ChatListContainer = connect(state => ({
  users: state.users
}), {})(Chatlist);

