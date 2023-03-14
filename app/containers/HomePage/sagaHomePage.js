import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosPost, axiosPut } from '../../utils/request';
import * as actions from './actionsHomePage';
import * as constants from './constantsHomePage';

export function* handleTakeList(action) {
  const path = 'user/list';
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
  yield takeLatest(constants.TAKEROLEGROUP, takeRoleGroup);
  yield takeLatest(constants.EDITACCOUNT, handleEditAccount);
}

export function* handleAddAccount(action) {
  const path = '/user/v2/add';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200)
      yield put(actions.addAccountSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
export function* takeRoleGroup(action) {
  const path = '/user/listrolegroup';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) yield put(actions.takeRoleGroupSuccess(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}

export function* handleEditAccount(action) {
  const path = '/user/v2/editmember';
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200)
      yield put(actions.editAccountSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
