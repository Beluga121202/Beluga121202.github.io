import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosPost, axiosPut } from '../../utils/request';
import * as actions from './actionsProducts';
import * as constants from './constantsProducts';

export function* handleTakeList(action) {
  const path = 'products/list';
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
  yield takeLatest(constants.ADDPRODUCTS, handleAddProducts);
  yield takeLatest(constants.EDITPRODUCTS, handleEditProducts);
  yield takeLatest(constants.DELETE, handleDeleteProducts);
}

export function* handleAddProducts(action) {
  const path = '/products/add';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200)
      yield put(actions.addProductsSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}

export function* handleEditProducts(action) {
  const path = '/products/edit';
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200)
      yield put(actions.editProductsSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
export function* handleDeleteProducts(action) {
  const path = '/products/delete';
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200)
      yield put(actions.deleteProductsSuccess(res), action.callback(res));
  } catch (error) {
    yield put(actions.errorRequest(error));
  }
}
