import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosPost, axiosPut } from '../../utils/request';
import * as actions from './actionsHomePage';
import * as constants from './constantsHomePage';

export function* handleTakeList(action) {
  const path = 'accounts/list';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200)
      yield put(actions.takeListSuccess(res), action.callback(res.data));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
export default function* watchAction() {
  yield takeLatest(constants.TAKELIST, handleTakeList);
  yield takeLatest(constants.ADDACCOUNT, handleAddAccount);
  yield takeLatest(constants.EDITACCOUNT, handleEditAccount);
  yield takeLatest(constants.DELETE, handleDeleteAccount);
}

export function* handleAddAccount(action) {
  const path = '/accounts/add';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200)
      yield put(actions.addAccountSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}

export function* handleEditAccount(action) {
  const path = '/accounts/edit';
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200)
      yield put(actions.editAccountSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
export function* handleDeleteAccount(action) {
  const path = '/accounts/delete';
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200)
      yield put(actions.deleteAccountSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}

