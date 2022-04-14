import Login from './Login';
import {connect} from 'react-redux';
import {setLogin} from '../../../redux/actions/auth/auth';

const mapStateToProps = (state: any) => {
  return {...state};
};

const mapDispatchToProps = (
  dispatch: (login: {type: string; payload: any; userName: string}) => void,
) => {
  return {
    dispatch,
    setLogin: (isLoggedIn: boolean, userName: string) => {
      dispatch(setLogin(isLoggedIn, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
