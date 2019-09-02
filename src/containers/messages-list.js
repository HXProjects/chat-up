import { connect } from 'react-redux';
import MessagesList from '../components/chat-input/messages-list';

const mapStateToProps = (state) => {
  return {
      messages: state.messages,
      loading: state.loading
  };
};
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
  }
);

export const MessageList = connect(mapStateToProps, mapDispatchToProps)(MessagesList);