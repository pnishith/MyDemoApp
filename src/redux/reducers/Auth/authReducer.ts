import {SET_LOGIN} from '../../actions/auth/auth-type';

const initialState = {
  isLoggedIn: false,
  userName: '',
};

const authReducer = (
  state = initialState,
  action: {type: any; payload: any; userName: string},
) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default authReducer;
