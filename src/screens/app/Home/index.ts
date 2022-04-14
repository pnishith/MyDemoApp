import Home from './Home';
import {connect} from 'react-redux';
import {setLogin} from '../../../redux/actions/auth/auth';

const mapStateToProps = (state: any) => {
  return {...state};
};

const mapDispatchToProps = (
  dispatch: (home: {type: string; payload: any}) => void,
) => {
  return {
    dispatch,
    setLogin: (isLoggedIn: boolean) => {
      dispatch(setLogin(isLoggedIn));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
