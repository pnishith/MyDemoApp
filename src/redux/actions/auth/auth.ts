import {SET_LOGIN} from './auth-type';

export const setLogin = (value: boolean, userName: string) => {
  return {
    type: SET_LOGIN,
    payload: value,
    userName: userName,
  };
};
