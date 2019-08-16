import { connect } from 'react-redux';

import Header from '../components/header/header';
import { logOut } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: ( name, logStatus) => {
    dispatch(logOut( name, logStatus))
  }
});

export const HeaderContainer = connect(() =>({}), mapDispatchToProps)(Header)
