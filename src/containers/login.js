import { connect } from 'react-redux';
import Login from '../components/log-in/log-in';
import { logIn } from '../actions';


const mapDispatchToProps = dispatch => ({
  dispatch: ( name, logStatus) => {
    dispatch(logIn( name, logStatus))
  }
});

export const LogInContainer = connect(() =>({}), mapDispatchToProps)(Login)
