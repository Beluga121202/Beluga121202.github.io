import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from './constantsLogin';
import * as actions from './actionsLogin';

import { axiosPost } from '../../utils/request';

export function* handleLogin(action) {
  const path = `/auth/login`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200)
      yield put(actions.loginSuccess(res), action.callback(res.data));
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

export default function* watchLogin() {
  yield takeLatest(constants.LOGIN, handleLogin);
}
