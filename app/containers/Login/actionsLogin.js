import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS} from './constantsLogin';

export function login(body, callback) {
  return {
    type: LOGIN,
    body,
    callback,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
